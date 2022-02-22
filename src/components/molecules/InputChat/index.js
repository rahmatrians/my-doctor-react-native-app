import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import { Button } from '../..'

const InputChat = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Tulis Pesan Untuk Naerobi"></TextInput>
            <Button type="btn-icon-send" title="Send" />
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    container: { padding: 16, flexDirection: 'row' },
    input: { backgroundColor: colors.disable, padding: 14, flex: 1, marginRight: 10, maxHeight: 45, fontFamily: fonts.primary.normal, fontSize: 14 },
})