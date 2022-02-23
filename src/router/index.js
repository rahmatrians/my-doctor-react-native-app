import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { GetStarted, Splash, Register, Login, Doctor, Messages, Hospitals, ChooseDoctor, Chatting, UserProfile, UpdateProfile, DoctorProfile } from "../pages";
import UploadPhoto from "../pages/UploadPhoto";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from "../components";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />} initialRouteName="Doctor">
            <Stack.Screen name="Doctor" component={Doctor} options={{ headerShown: false }} />
            <Stack.Screen name="Messages" component={Messages} options={{ headerShown: false }} />
            <Stack.Screen name="Hospitals" component={Hospitals} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Register">
            {/* <Stack.Navigator> */}
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name="ChooseDoctor" component={ChooseDoctor} options={{ headerShown: false }} />
            <Stack.Screen name="Chatting" component={Chatting} options={{ headerShown: false }} />
            <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }} />
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{ headerShown: false }} />
            <Stack.Screen name="DoctorProfile" component={DoctorProfile} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router;