/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('WelcomeAuth');
        }, 2000);
    });
  return (
    <View style={styles.viewContainer}>
      <Text>Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
      backgroundColor: "black",
  },
});

export default Splash;
