/* eslint-disable prettier/prettier */
import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../../utils';

const ButtonIcon = ({...rest}) => {
  return (
    <TouchableOpacity {...rest}>
        {rest.name === 'back' && <Icon name='angle-left' size={30} style={styles.icon.back} />}
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
    icon:{
        back:{
            color: colors.default,
            marginLeft: 10,
            backgroundColor: 'transparent',
        },
    }
});
