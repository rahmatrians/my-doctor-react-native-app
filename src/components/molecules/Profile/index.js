import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconRemovePhoto } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Profile = ({ name, desc, isRemove, photo, onPress}) => {
    return (
        <View style={styles.container}>
            
            {!isRemove && (
                <View style={styles.borderPofile}>
                <Image source={photo} style={styles.avatar} />
                </View>
            )}
            {isRemove && (
                <TouchableOpacity style={styles.borderPofile} onPress={onPress}>
                <Image source={photo} style={styles.avatar} />
                <IconRemovePhoto style={styles.removePhoto} />
                </TouchableOpacity>
            )}
            {name && (
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.profession}>{desc}</Text>
                </View>)}
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: { justifyContent: 'center', alignItems: 'center' },
    borderPofile: { width: 130, height: 130, borderWidth: 1, borderColor: colors.border, borderRadius: 130 / 2, alignItems: 'center', justifyContent: 'center' },
    avatar: { width: 110, height: 110, borderRadius: 110 / 2 },
    removePhoto: { position: 'absolute', right: 8, bottom: 8 },
    name: { fontSize: 20, fontFamily: fonts.primary[600], color: colors.text.primary, marginTop: 16, textAlign: 'center' },
    profession: { fontSize: 16, fontFamily: fonts.primary[600], color: colors.text.secondary, marginTop: 2, textAlign: 'center' },
})