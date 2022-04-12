/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LoginIllustration } from '../../assets';
import { Button, Input } from '../../components';
import { setForm } from '../../redux';
import { colors } from '../../utils';

const Login = ({navigation}) => {
  const LoginReducer = useSelector(state => state.LoginReducer);
  //kalo yang dipake cuma form bisa buat { form } aja, jadi gak perlu RegisterReducer
  const dispatch = useDispatch();
  //untuk merubah value dari reducer

  const sendData = () => {
    console.log('data yang dikirim: ', LoginReducer.form);

  };

  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value));
  };
  //input berubah, terima value dari form kemudian set form, copy full name terus ubah nama dengan nama baru.
  //bawa nilai lama => ...form
  //dispatch mengirimkan objek

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper.page}>
        <Button type="icon" name="back" onPress={() => navigation.goBack()}/>
        <View style={styles.wrapper.illustrationanddesc}>
          <Image style={styles.wrapper.illustration} source={LoginIllustration}/>
          <Text style={styles.text.title}>{LoginReducer.title}</Text>
        </View>
        <Input placeholder="email" 
            value={LoginReducer.form.email}
            onChangeText={(value) => onInputChange(value, 'email')}
          />
        <View style={styles.space(33)} />
        <Input placeholder="password"
            value={LoginReducer.form.password}
            onChangeText={(value) => onInputChange(value, 'password')}
            secureTextEntry={true}
          />
        <View style={styles.space(83)} />
        <Button title="Log In" onPress={sendData}/>
        </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  text:{
    title:{
      color: colors.default,
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 16,
      maxWidth: 200,
      // marginBottom: 40,
      textAlign: 'center',
    },
    desc:{
      color: colors.default,
      fontSize: 16,
      marginTop: 5,
      // maxWidth: 200,
      marginBottom: 40,
      textAlign: 'center',
    }
  },
  icon:{
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
