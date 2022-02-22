import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, Link } from '../../components'
import { IconAddPhoto, ILGetStarted, ILLogo, ILNullPhoto } from '../../assets'
import { colors, fonts } from '../../utils'

const UploadPhoto = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header title="Upload Photo" onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.avatarWrapper}>
                        <ILNullPhoto style={styles.avatar} />
                        <IconAddPhoto style={styles.addPhoto} />
                    </View>
                    <Text style={styles.name}>Shayna Melinda</Text>
                    <Text style={styles.profession}>Product Designer</Text>
                </View>
                <View>
                    <Button title="Upload and Continue" />
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
    avatar: {},
    content: { paddingHorizontal: 40, paddingBottom: 40, flex: 1, justifyContent: 'space-between' },
    avatarWrapper: { width: 130, height: 130, borderWidth: 1, borderRadius: 130 / 2, alignItems: 'center', justifyContent: 'center', borderColor: colors.border },
    addPhoto: { position: 'absolute', bottom: 8, right: 6 },
    name: { fontSize: 24, color: colors.text.primary, fontFamily: fonts.primary[600], textAlign: 'center' },
    profession: { fontSize: 18, fontFamily: fonts.primary.normal, textAlign: 'center', color: colors.text.secondary, marginTop: 4 },
})