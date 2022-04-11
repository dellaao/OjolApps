/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { Button } from '../../components';

const ActionButton = ({desc, title, onPress}) => {
  return (
    <View style={styles.containerActionButton}>
      <Text style={styles.text.Desc}>{desc}</Text>
      <Button title={title} onPress={onPress}/>
    </View>
  );
};

const styles = StyleSheet.create({
  containerActionButton: {
    marginBottom: 43,
    maxWidth: 225,
  },
  text: {
    Desc: {
      fontSize: 12,
      color: '#7e7e7e',
      textAlign: 'center',
      marginBottom: 6,
      paddingHorizontal: 15,
    },
  },
});

export default ActionButton;
