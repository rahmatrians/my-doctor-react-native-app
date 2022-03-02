import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, Gap, Header, Input, Profile } from '../../components'
import { colors, getData, storeData, useForm } from '../../utils'
import { launchImageLibrary } from 'react-native-image-picker'


//firebase
import { db } from '../../config/Firebase';
import { doc, updateDoc } from "firebase/firestore/lite";
import { showMessage } from 'react-native-flash-message';
import { ILNullPhoto } from '../../assets';

const UpdateProfile = ({ navigation }) => {

    const [profile, setProfile] = useState({
        fullName: '',
        professoin: '',
        email: '',
    });
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState(ILNullPhoto);
    const [photoForDB, setPhotoForDB] = useState('');

    useEffect(() => {
        getData('user')
            .then(res => {
                setPhoto({ uri: res.photo });
                setProfile(res);
                console.log('user', res);
            })
            .catch(err => console.log(err))
    }, []);

    const changeText = (key, val) => {
        setProfile({
            ...profile,
            [key]: val,
        })
    }

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
                console.log(photoForDB);
                setPhoto(source);
            }
        });
    }

    const update = () => {
        const data = profile;
        photoForDB !== '' && (data.photo = photoForDB);
        updateDoc(doc(db, "users", data.uid), data)
            .then(res => {
                storeData('user', data)
                    .then(
                        showMessage({
                            message: "success",
                            description: "mantappu lah bisa update nih!",
                            type: "success",
                            backgroundColor: colors.primary,
                            color: colors.white,
                        })
                    )
                navigation.goBack();
            })
            .catch(err => {
                showMessage({
                    message: errorCode,
                    description: errorMessage,
                    type: "default",
                    backgroundColor: colors.error,
                    color: colors.white,
                });
            })
    }

    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile isRemove photo={photo} onPress={getImage} />
                    <Gap height={26} />
                    <Input label="Full Name" value={profile.fullName} onChangeText={(val) => changeText('fullName', val)} />
                    <Gap height={24} />
                    <Input label="Pekerjaan" value={profile.profession} onChangeText={(val) => changeText('profession', val)} />
                    <Gap height={24} />
                    <Input label="Email" value={profile.email} disable />
                    <Gap height={24} />
                    <Input label="Password" value={password} onChangeText={(val) => setPassword(val)} />
                    <Gap height={40} />
                    <Button title="Save Profile" onPress={update} />
                </View>
            </ScrollView>
        </View>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    page: { backgroundColor: colors.white, flex: 1 },
    content: { padding: 40, paddingTop: 0 },
})