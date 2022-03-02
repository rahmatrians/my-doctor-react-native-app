import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Gap, Header, Link } from '../../components'
import { IconAddPhoto, IconRemovePhoto, ILGetStarted, ILLogo, ILNullPhoto } from '../../assets'
import { colors, fonts, storeData } from '../../utils'
import { launchImageLibrary } from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message'

//Firebase
import { db } from '../../config/Firebase'
import { doc, updateDoc } from "firebase/firestore/lite";


const UploadPhoto = ({ navigation, route }) => {
    const { fullName, profession, uid } = route.params;
    const [hasPhoto, setHasPhoto] = useState(false);
    const [photoForDB, setPhotoForDB] = useState('');
    const [photo, setPhoto] = useState({});

    const getImage = () => {
        const option = {
            maxWidth: 200,
            maxHeight: 200,
            quality: 0.6,
            includeBase64: true,
        }

        launchImageLibrary(option, (res) => {
            console.log('response:', res);
            if (res.didCancel || res.error) {
                showMessage({
                    message: 'Whoops, kamu belum memilih fotonya',
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white,
                })
            } else {
                const source = { uri: res.assets[0].uri };
                setPhotoForDB(`data:${res.assets[0].type};base64, ${res.assets[0].base64}`);
                setPhoto(source);
                setHasPhoto(true);
            }
        });
    }

    const uploadAndContinue = async () => {
        await updateDoc(doc(db, "users", uid), {
            photo: photoForDB,
        });

        const data = route.params;
        data.photo = photoForDB;
        storeData('user', data);

        navigation.replace('MainApp');
    }

    return (
        <View style={styles.page}>
            <Header title="Upload Photo" onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
                        {hasPhoto && (
                            <>
                                <Image style={styles.avatar} source={photo} />
                                <IconRemovePhoto style={styles.addPhoto} />
                            </>
                        )}
                        {!hasPhoto && (
                            <>
                                <ILNullPhoto style={styles.avatar} />
                                <IconAddPhoto style={styles.addPhoto} />
                            </>
                        )}
                    </TouchableOpacity>
                    <Text style={styles.name}>{fullName}</Text>
                    <Text style={styles.profession}>{profession}</Text>
                </View>
                <View>
                    <Button title="Upload and Continue" disable={!hasPhoto} onPress={uploadAndContinue} />
                    <Gap height={30} />
                    <Link title="Skip for this" align="center" size={16} onPress={() => navigation.replace('MainApp')} />
                </View>
            </View >
        </View >
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: { backgroundColor: colors.white, flex: 1 },
    profile: { alignItems: 'center', flex: 1, justifyContent: 'center' },
    avatar: { width: 110, height: 110, borderRadius: 130 / 2 },
    content: { paddingHorizontal: 40, paddingBottom: 40, flex: 1, justifyContent: 'space-between' },
    avatarWrapper: { width: 130, height: 130, borderWidth: 1, borderRadius: 130 / 2, alignItems: 'center', justifyContent: 'center', borderColor: colors.border },
    addPhoto: { position: 'absolute', bottom: 8, right: 6 },
    name: { fontSize: 24, color: colors.text.primary, fontFamily: fonts.primary[600], textAlign: 'center' },
    profession: { fontSize: 18, fontFamily: fonts.primary.normal, textAlign: 'center', color: colors.text.secondary, marginTop: 4 },
})