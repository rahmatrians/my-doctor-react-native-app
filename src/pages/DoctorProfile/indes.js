import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, Profile, ProfileItem } from '../../components'
import { colors } from '../../utils'

const DoctorProfile = ({ navigation }) => {
    return (
        <View style={styles.pagge}>
            <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
            <Profile name="Nairobi Putri Hayza" desc="Dokter Anak" />
            <Gap height={10} />
            <ProfileItem label="Alumnus" value="Universitas Indonesia, 2020" />
            <ProfileItem label="Tempat Prakti" value="kRumah Sakit Umum, Bandung" />
            <ProfileItem label="No. STR" value="0000116622081996" />
            <View style={styles.action}>
                <Button title="Start Consultation" onPress={() => navigation.navigate('Chatting')} />
            </View>
        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    pagge: { backgroundColor: colors.white, flex: 1 },
    action: { paddingHorizontal: 40, paddingTop: 23 },
})