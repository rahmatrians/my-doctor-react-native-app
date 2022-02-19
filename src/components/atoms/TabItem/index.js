import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconDoctor, IconDoctorActive, IconHospitals, IconHospitalsActive, IconMessages, IconMessagesActive } from '../../../assets'
import { colors, fonts } from '../../../utils';

const TabItem = ({ title, active, onPress, onLongPress }) => {
    const Icon = () => {
        if (title === "Doctor") {
            return active ? <IconDoctorActive /> : <IconDoctor />;
        } else if (title === "Messages") {
            return active ? <IconMessagesActive /> : <IconMessages />;
        } else if (title === "Hospitals") {
            return active ? <IconHospitalsActive /> : <IconHospitals />;
        } else {
            return <IconDoctor />;
        }
    };

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: { alignItems: 'center' },
    text: (active) => ({ fontSize: 10, color: active ? colors.text.menuActive : colors.text.menuInactive, fontFamily: fonts.primary[600], marginTop: 4 })
})