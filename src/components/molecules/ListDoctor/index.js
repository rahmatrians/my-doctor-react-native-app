import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Doctor2, IconGiveRate, IconHelp, IconLang, IconNext, IconProfile } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ListDoctor = ({ pic, name, desc, type, onPress, icon }) => {
    const Icon = () => {
        if (icon === 'edit-profile') {
            return <IconProfile />
        } else if (icon === 'language') {
            return <IconLang />
        } else if (icon === 'rate') {
            return <IconGiveRate />
        } else if (icon === 'help') {
            return <IconHelp />
        } else {
            return <IconProfile />
        }
    };

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon ? <Icon /> : <Image source={pic} style={styles.avatar} />}
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            {type === "next" && <IconNext />}
        </TouchableOpacity>
    )
}

export default ListDoctor

const styles = StyleSheet.create({
    container: { flexDirection: 'row', padding: 16, borderBottomWidth: 1, borderBottomColor: colors.border, alignItems: 'center', justifyContent: 'space-between' },
    content: { flex: 1, marginLeft: 16 },
    avatar: { width: 36, height: 46, borderRadius: 46 / 2, marginRight: 12 },
    name: { fontSize: 16, fontFamily: fonts.primary.normal, color: colors.text.primary },
    desc: { fontSize: 12, fontFamily: fonts.primary[300], color: colors.text.secondary },
})