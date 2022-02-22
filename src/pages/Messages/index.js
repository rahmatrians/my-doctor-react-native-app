import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ListDoctor } from '../../components'
import { colors, fonts } from '../../utils'
import { Doctor1, Doctor2, Doctor3 } from '../../assets'

const Messages = ({ navigation }) => {
    const [doctors, setDoctors] = useState([
        { id: 1, profile: Doctor1, name: 'Alexander Jannie', desc: 'Baik ibu, terima kasih banyak atas wakt...' },
        { id: 2, profile: Doctor1, name: 'Nairobi Putri Hayza', desc: 'Oh tentu saja tidak karena jeruk it...' },
        { id: 3, profile: Doctor1, name: 'John McParker Steve', desc: 'Oke menurut pak dokter bagaimana unt...' },
    ]);

    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                {doctors.map(data => {
                    return (<ListDoctor pic={data.profile} name={data.name} desc={data.desc} onPress={() => navigation.navigate('Chatting')} />)
                })}
            </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    page: { backgroundColor: colors.secondary, flex: 1 },
    content: { backgroundColor: colors.white, flex: 1, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
    title: { fontSize: 20, fontFamily: fonts.primary[600], color: colors.text.primary, marginTop: 30, marginLeft: 16 },
})