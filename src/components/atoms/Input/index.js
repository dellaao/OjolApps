/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import { colors } from '../../../utils';

const Input = ({placeholder}) => {
  return (
    <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={colors.disable}/>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.default,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 14,
    color: colors.default,
  },
});