/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const WelcomeAuth = () => {
  return (
    <ScrollView>
        <View style={styles.container}>
            <Text>WelcomeAuth</Text>
        </View>
    </ScrollView>
  );
};

export default WelcomeAuth;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'pink',
    },
});
