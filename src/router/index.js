import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { GetStarted, Splash, Register, Login, Doctor, Messages, Hospitals } from "../pages";
import UploadPhoto from "../pages/UploadPhoto";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from "../components";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Stack.Screen name="Doctor" component={Doctor} />
            <Stack.Screen name="Messages" component={Messages} />
            <Stack.Screen name="Hospitals" component={Hospitals} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="MainApp">
            {/* <Stack.Navigator> */}
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router;