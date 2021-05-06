import React from 'react'
import {View,Text,StyleSheet,ImageBackground, Button} from 'react-native'


export default class HomeScreen extends React.Component{
    render(){
        return(
             <ImageBackground source={require('../assets/images/background.jpg')} style={style.Container}>
                 <Button
                 title=" Don't have an Acoount? Register"
                  />
                 <Button
                 title="Login" />
             </ImageBackground>
             );
    }
}
const style=StyleSheet.create(
    {
        Container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }
    }
)