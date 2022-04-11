/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ActionButton from './ActionButton';
import { colors } from '../../utils';
import { welcomeAuth } from '../../assets';

const WelcomeAuth = ({navigation}) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    }
  return (
    <View style={styles.wrapper.page}>
        <Image style={styles.wrapper.illustration} source={welcomeAuth}/>
        <Text style={styles.text.welcome}>Selamat Datang di TaxieApps</Text>
        <ActionButton desc="Silahkan masuk, jika memiliki akun" title="masuk" onPress={() => handleGoTo('Login')}/>
        <ActionButton desc="Silahkan mendaftarkan diri" title="daftar" onPress={() => handleGoTo('Register')} />
    </View>
  );
};

export default WelcomeAuth;

const styles = StyleSheet.create({
    wrapper:{
        page:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
        },
        illustration:{
            width: 250,
            height: 145,
            marginBottom: 10,
        },
    },
    text:{
        welcome:{
            color: colors.default,
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 76,
        }
    },
});