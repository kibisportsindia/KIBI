import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'


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
            marginTop: 10,
            width: '70%',
            borderColor: '#432344',
            backgroundColor: '#fff',
            padding: 10,
            borderWidth: 2,
            alignSelf: 'center',
            borderRadius: 3,
        },
        buttonText: {
            textAlign: 'center',
            color: '#432344'
        }
    }
)