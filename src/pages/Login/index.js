import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ILLogo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components/atoms'
import { colors, fonts, storeData, useForm } from '../../utils'


//Firebase
import { db } from '../../config/Firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore/lite";
import { showMessage } from 'react-native-flash-message'

const Login = ({ navigation }) => {
    const [form, setForm] = useForm({
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);

    const login = () => {
        console.log(form);
        setLoading(true);

        const auth = getAuth();
        signInWithEmailAndPassword(auth, form.email, form.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                getDoc(doc(db, "users", user.uid))
                    .then(res => {
                        console.log('docsnap', res.data());
                        storeData('user', res.data());
                        showMessage({
                            message: "success",
                            description: "mantappu lah bisa login nih!",
                            type: "success",
                            backgroundColor: colors.primary,
                            color: colors.white,
                        });
                        navigation.replace('MainApp');
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                showMessage({
                    message: errorCode,
                    description: errorMessage,
                    type: "default",
                    backgroundColor: colors.error,
                    color: colors.white,
                });
            });


    }

    return (
        <View style={styles.page}>
            <ILLogo />
            <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
            <Input label="Email Address" value={form.email} onChangeText={(value) => setForm('email', value)} />
            <Gap height={24} />
            <Input label="Password" alue={form.password} onChangeText={(value) => setForm('password', value)} secureTextEntry />
            <Gap height={10} />
            <Link title="Forgot My Password" size={12} />
            <Gap height={40} />
            <Button title="Sign In" onPress={login} />
            <Gap height={30} />
            <Link title="Create New Account" size={16} align="center" onPress={() => navigation.navigate('Register')} />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page: { padding: 40, backgroundColor: colors.white, flex: 1 },
    title: { fontSize: 20, fontFamily: fonts.primary[600], color: colors.text.primary, marginTop: 40, marginBottom: 40, maxWidth: 153 }
})