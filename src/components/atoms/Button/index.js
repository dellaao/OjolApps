/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { colors } from '../../../utils';

const Button = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonStyling} onPress={onPress}>
        <Text style={styles.text.Button}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    Button: {
      fontSize: 12,
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center',
      paddingVertical: 13,
    },
  },
  buttonStyling: {
    backgroundColor: colors.default,
    borderRadius: 25,
  },
});
