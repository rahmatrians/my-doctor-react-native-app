import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Header, ListDoctor } from '../../components'
import { Doctor1 } from '../../assets'
import { colors } from '../../utils'

const ChooseDoctor = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header title="Pilih Dokter Anak" type="dark" onPress={() => navigation.goBack()} />
            <ListDoctor pic={Doctor1} name="Alexander Jannie" desc="Wanita" type="next" onPress={() => navigation.navigate('Chatting')} />
            <ListDoctor pic={Doctor1} name="Alexander Jannie" desc="Wanita" type="next" />
            <ListDoctor pic={Doctor1} name="Alexander Jannie" desc="Wanita" type="next" />
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page: { backgroundColor: colors.white, flex: 1 },
})