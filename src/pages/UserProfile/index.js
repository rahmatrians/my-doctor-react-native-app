import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Header, ListDoctor, Profile, Gap } from '../../components'
import { colors, useForm, getData } from '../../utils'
import { ILNullPhoto } from '../../assets'

const UserProfile = ({ navigation }) => {
    const [profile, setProfile] = useState({
        fullName: '',
        profession: '',
        photo: ILNullPhoto,
    });

    useEffect(() => {
        getData('user').then(res => {
            res.photo = { uri: res.photo };
            console.log("data:", res);
            setProfile(res);
        })
    }, []);


    return (
        <View style={styles.page}>
            <Header title="Profile" onPress={() => navigation.goBack()} />
            <Gap height={10} />
            {profile.fullName.length > 0 && (<Profile name={profile.fullName} desc={profile.profession} photo={profile.photo} />)}
            <Gap height={14} />
            <ListDoctor name="Edit Profile" desc="Last Update Yesterday" type="next" icon="edit-profile" onPress={() => navigation.navigate('UpdateProfile')} />
            <ListDoctor name="Language" desc="Last Update Yesterday" type="next" icon="language" />
            <ListDoctor name="Give Us Rate" desc="Last Update Yesterday" type="next" icon="rate" />
            <ListDoctor name="Help Center" desc="Last Update Yesterday" type="next" icon="help" />
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    page: { flex: 1, backgroundColor: colors.white },
})