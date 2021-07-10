import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimensions'

const FormButton = ({ buttonTitle, ...rest }) => {
    return (
        <TouchableOpacity style={style.buttonContainer}{...rest}>
            <Text style={style.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}
export default FormButton;

const style = StyleSheet.create(
    {
        buttonContainer: {
            marginTop: 30,
            width: '95%',
            backgroundColor: '#432344',
            padding: 10,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 3,
        },
        buttonText: {
            color: '#fff'
        }
    }
)