import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={style.buttonContainer} {...rest}>
      <Text style={style.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};
export default FormButton;

const style = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '20%',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
    alignSelf: 'flex-end',
    borderRadius: 3,
  },
  buttonText: {
    textAlign: 'center',
    color: 'gray',
  },
});
