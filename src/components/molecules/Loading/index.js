import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'

const Loading = () => {
    return (
        <View style={styles.wrapper}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={styles.text}>Loading</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    wrapper: { flex: 1, position: 'absolute', backgroundColor: colors.loadingBackground, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 18, fontFamily: fonts.primary[600], color: colors.primary, marginTop: 16 },
})