import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import Other from './Other'
import IsMe from './isMe'

const ChatItem = ({ isMe }) => {
    return isMe ? <IsMe /> : <Other />
}

export default ChatItem

const styles = StyleSheet.create({
    container: { marginBottom: 20, alignItems: 'flex-end', paddingRight: 16 },
    chatContent: { maxWidth: '70%', padding: 12, paddingRight: 18, backgroundColor: colors.cardLight, borderRadius: 10, borderBottomRightRadius: 0 },
    text: { fontSize: 14, fontFamily: fonts.primary.normal, color: colors.text.primary },
    date: { fontSize: 11, fontFamily: fonts.primary.normal, color: colors.text.secondary, marginTop: 8 },
})