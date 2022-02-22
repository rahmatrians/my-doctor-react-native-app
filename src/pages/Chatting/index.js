import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import { ChatItem, InputChat } from '..'
import { colors, fonts } from '../../utils'

const Chatting = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header type="dark-profile" title="Nairobi Putri Hayza" onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
                <ChatItem isMe />
                <ChatItem />
                <ChatItem isMe />
            </View>
            <InputChat />
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    page: { backgroundColor: colors.white, flex: 1 },
    chatDate: { fontSize: 11, fontFamily: fonts.primary.normal, color: colors.text.secondary, textAlign: 'center', marginTop: 20 },
    content: { flex: 1 },
})