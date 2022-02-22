import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Gap, Header, Input } from '../../components';
import { colors, useForm } from '../../utils';
import { Fire } from '../../config';

//Firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = ({ navigation }) => {
    const [form, setForm] = useForm({
        fullName: '',
        profession: '',
        email: '',
        password: ''
    });

    const onContinue = () => {

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, form.email, form.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('register success : ', userCredential);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('error register : ', errorMessage);
            });
        console.log(form);
        // navigation.navigate('UploadPhoto');
    }

    return (
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Input label="Full Name" value={form.fullName} onChangeText={(value) => setForm('fullName', value)} />
                    <Gap height={24} />
                    <Input label="Pekerjaan" value={form.profession} onChangeText={(value) => setForm('profession', value)} />
                    <Gap height={24} />
                    <Input label="Email" value={form.email} onChangeText={(value) => setForm('email', value)} />
                    <Gap height={24} />
                    <Input label="Password" value={form.password} onChangeText={(value) => setForm('password', value)} secureTextEntry />
                    <Gap height={40} />
                    <Button title="Continue" onPress={onContinue} />
                </ScrollView>
            </View>
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    page: { backgroundColor: colors.white, flex: 1 },
    content: { padding: 40, paddingTop: 0 }
})