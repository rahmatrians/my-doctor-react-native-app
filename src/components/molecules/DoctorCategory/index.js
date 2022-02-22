import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ILCatUmum, ILCatPsikiater, ILCatAnak, ILCatObat } from '../../../assets'
import { colors, fonts } from '../../../utils'

const DoctorCategory = ({ category, onPress }) => {

    const Icon = () => {
        if (category === "dokter umum") {
            return <ILCatUmum style={styles.illustration} />
        } else if (category === "dokter psikiater") {
            return <ILCatPsikiater style={styles.illustration} />
        } else if (category === "dokter obat") {
            return <ILCatObat style={styles.illustration} />
        } else if (category === "dokter anak") {
            return <ILCatAnak style={styles.illustration} />
        } else {
            return <ILCatUmum style={styles.illustration} />
        }
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon />
            <Text style={styles.label}>Saya Butuh</Text>
            <Text style={styles.category}>{category}</Text>
        </TouchableOpacity>
    )
}

export default DoctorCategory

const styles = StyleSheet.create({
    container: { padding: 12, backgroundColor: colors.cardLight, alignSelf: 'flex-start', marginRight: 10, borderRadius: 10, width: 100, height: 130 },
    illustration: { marginBottom: 28 },
    label: { fontSize: 12, fontFamily: fonts.primary[300], colors: colors.text.primary, },
    category: { fontSize: 12, fontFamily: fonts.primary[600], color: colors.text.primary },
})