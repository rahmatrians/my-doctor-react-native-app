import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Hospital1, Hospital2, Hospital3, HospitalCover } from '../../assets'
import { colors, fonts } from '../../utils'
import { ListHospital } from '../../components'

const Hospitals = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={HospitalCover} style={styles.background}>
                <Text style={styles.title}>Nearby Hospital</Text>
                <Text style={styles.desc}>3 Tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
                <ListHospital type="Rumah Sakit" name="Citra Bunga Merdeka" address="Jln. Surya Sejahtera 20" pic={Hospital1} />
                <ListHospital type="Rumah Sakit Anak" name="Happy Family and Kids" address="Jln. Surya Sejahtera 20" pic={Hospital2} />
                <ListHospital type="Rumah Sakit Jiwa" name="Tingkatan Paling Atas" address="Jln. Surya Sejahtera 20" pic={Hospital3} />
            </View>
        </View>
    )
}

export default Hospitals

const styles = StyleSheet.create({
    page: { backgroundColor: colors.secondary, flex: 1 },
    content: { backgroundColor: colors.white, borderRadius: 20, flex: 1, marginTop: -30, paddingTop: 14 },
    background: { height: 240, paddingTop: 30 },
    title: { fontSize: 20, fontFamily: fonts.primary[600], color: colors.white, textAlign: 'center' },
    desc: { fontSize: 14, fontFamily: fonts.primary[300], marginTop: 6, textAlign: 'center', color: colors.white },
})