/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterIllustration } from '../../assets';
import { Button, Input } from '../../components';
import { setForm } from '../../redux';
import { colors } from '../../utils';

const Register = ({navigation}) => {
  const RegisterReducer = useSelector(state => state.RegisterReducer);
  //kalo yang dipake cuma form bisa buat { form } aja, jadi gak perlu RegisterReducer
  const dispatch = useDispatch();
  //untuk merubah value dari reducer

  // const [form, setForm] = useState({
  //   fullName: '',
  //   email:'',
  //   password: '',
  // });

  // useEffect(() => {
  //   console.log('global: ', RegisterReducer);
  // }, [RegisterReducer]);

  const sendData = () => {
    console.log('data yang dikirim: ', RegisterReducer.form);

  };

  const onInputChange = (value, inputType) => {
    // setForm({
    //   ...form,
    //   [input]: value,
    // });
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
          <Image style={styles.wrapper.illustration} source={RegisterIllustration}/>
          <Text style={styles.text.title}>{RegisterReducer.title}</Text>
          <Text style={styles.text.desc}>{RegisterReducer.desc}</Text>
        </View>
        <Input placeholder="nama lengkap" 
          value={RegisterReducer.form.fullName} 
          onChangeText={(value) => onInputChange(value, 'fullName')}/>
        <View style={styles.space(33)} />
        <Input placeholder="email" 
            value={RegisterReducer.form.email}
            onChangeText={(value) => onInputChange(value, 'email')}
          />
        <View style={styles.space(33)} />
        <Input placeholder="password"
            value={RegisterReducer.form.password}
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
