import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Gap, Header, Input, Loading } from '../../components';
import { colors, getData, storeData, useForm } from '../../utils';
import { db } from '../../config/Firebase'

//Firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore/lite";

//flash message pkg
import { showMessage, hideMessage } from 'react-native-flash-message';

const Register = ({ navigation }) => {
    const [form, setForm] = useForm({
        fullName: '',
        profession: '',
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);

    const onContinue = () => {
        setLoading(true);
        console.log(form);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, form.email, form.password)
            .then((userCredential) => {
                setLoading(false);
                setForm('reset');
                // Signed in 
                const user = userCredential.user;

                //push user data to firestore
                // Add a new document in collection "cities"
                setDoc(doc(db, "users", user.uid), {
                    fullName: form.fullName,
                    profession: form.profession,
                    email: form.email,
                    uid: user.uid,
                });

                //save and get data to local storage
                storeData('user', form);
                getData('user').then((res) => console.log('res', res));

                console.log('register success : ', userCredential);
                navigation.navigate('UploadPhoto', {
                    fullName: form.fullName,
                    profession: form.profession,
                    email: form.email,
                    uid: user.uid,
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setLoading(false);
                showMessage({
                    message: errorCode,
                    description: errorMessage,
                    type: "default",
                    backgroundColor: colors.error,
                    color: colors.white,
                });
                console.log('error register : ', error);
            });
    }

    return (
        <>
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
            {loading && <Loading />}
        </>
    )
}

export default Register;

const styles = StyleSheet.create({
    page: { backgroundColor: colors.white, flex: 1 },
    content: { padding: 40, paddingTop: 0 }
})