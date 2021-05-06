import React from 'react'
import { View, Text, TouchableOpacity, TextInput,StyleSheet} from 'react-native'
import {windowHeight,windowWidth} from '../utils/Dimensions'

const FormInput=({labelValue,placeholderText,...rest})=> {
    return (
     <View style={style.inputContainer}>
         <TextInput
         style={style.Input}
         value={labelValue}
         placeholder={placeholderText}
         placeholderTextColor='#666'
         {...rest} />
     </View>
    )
}
export default FormInput;

const style=StyleSheet.create(
    {
        inputContainer:{
            marginTop:5,
            marginBottom:5,
            borderColor:'#ccc',
            borderWidth:1,
            flexDirection:'row',
            alignItems:'center',
            borderRadius:3,
            backgroundColor:'#fff'
        },
        Input:{
           padding:10,
           flex:1,
           fontSize:16,
           fontFamily:'Lato-Regular',
           color:'#333',
           justifyContent:'center',
           alignItems:'center'
        },
    }
)