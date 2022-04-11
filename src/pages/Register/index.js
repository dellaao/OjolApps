/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import { colors } from '../../utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input } from '../../components';
import { welcomeAuth } from '../../assets';

const Register = () => {
  return (
    <ScrollView>
        <View style={styles.wrapper.page}>
        <Icon name='angle-left' size={30} style={styles.icon.back} />
        <View style={styles.wrapper.illustrationanddesc}>
          <Image style={styles.wrapper.illustration} source={welcomeAuth}/>
          <Text style={styles.text.register}>Mohon Mengisi Data Anda</Text>
        </View>
        <Input placeholder="nama lengkap" />
        <View style={styles.space(33)} />
        <Input placeholder="email" />
        <View style={styles.space(33)} />
        <Input placeholder="password" />
        <View style={styles.space(33)} />
        <Button title="mendaftar"/>
        </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  text:{
    register:{
      color: colors.default,
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 16,
      maxWidth: 200,
      marginBottom: 40,
      textAlign: 'center',
    },
  },
  icon:{
    back:{
      color: colors.default,
      marginLeft: 10,
      // width: 50,
      // height: 50,
      backgroundColor: 'transparent',
    },
    iconButton: {
      backgroundColor: 'transparent',
      marginHorizontal:10,
      marginVertical: 10,
      textAlign: 'center',
    },
  },
    wrapper:{
        page:{
          padding:20,
        },
        illustrationanddesc:{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        illustration:{
          marginTop: 8,
          width: 250,
          height: 145,
          marginBottom: 10,
        },
    },
    space: (value) => {
      return {
        height:value,
      };
    },
});