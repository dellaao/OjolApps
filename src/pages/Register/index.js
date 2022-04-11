/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import { colors } from '../../utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input } from '../../components';
import { RegisterIllustration } from '../../assets';

const Register = ({navigation}) => {
  const [form, setForm] = useState({
    fullName: '',
    email:'',
    password: '',
  });

  const sendData = () => {
    console.log('data yang dikirim: ', form);

  };

  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    });
  };
  //input berubah, terima value dari form kemudian set form, copy full name terus ubah nama dengan nama baru.
  //bawa nilai lama => ...form

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper.page}>
        <Icon name='angle-left' size={30} style={styles.icon.back} />
        <View style={styles.wrapper.illustrationanddesc}>
          <Image style={styles.wrapper.illustration} source={RegisterIllustration}/>
          <Text style={styles.text.register}>Sign up</Text>
        </View>
        <Input placeholder="nama lengkap" 
          value={form.fullName} 
          onChangeText={(value) => onInputChange(value, 'fullName')}/>
        <View style={styles.space(33)} />
        <Input placeholder="email" 
            value={form.email}
            onChangeText={(value) => onInputChange(value, 'email')}
          />
        <View style={styles.space(33)} />
        <Input placeholder="password" 
            value={form.password}
            onChangeText={(value) => onInputChange(value, 'password')}
            secureTextEntry={true}
          />
        <View style={styles.space(83)} />
        <Button title="Create Account" onPress={sendData}/>
        </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  text:{
    register:{
      color: colors.default,
      fontSize: 20,
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
          height: 230,
          marginBottom: 10,
        },
    },
    space: (value) => {
      return {
        height:value,
      };
    },
});
