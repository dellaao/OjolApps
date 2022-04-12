/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Splash, Login, Register, WelcomeAuth } from '../pages';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'>
        {/*  initialRouteName='Register' => masukin di dalam stack.navigator */}
            <Stack.Screen name="Splash" component={Splash} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Login" component={Login} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Register" component={Register} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="WelcomeAuth" component={WelcomeAuth} options={{
                headerShown: false,
            }} />
             <Stack.Screen name="Home" component={Home} options={{
                headerShown: false,
            }} />
        </Stack.Navigator>
    );
};

export default Router;