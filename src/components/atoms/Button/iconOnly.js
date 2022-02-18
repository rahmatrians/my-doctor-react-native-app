import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconBackDark } from '../../../assets';

const IconOnly = ({ onPress, icon }) => {
    const Icon = () => {
        if (icon === 'back-dark') {
            return <IconBackDark />;
        } else if (icon === 'back-light') {
            return <IconBackDark />;
        } else {
            return <IconBackDark />;
        }
    };
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon />
        </TouchableOpacity>
    )
}

export default IconOnly;