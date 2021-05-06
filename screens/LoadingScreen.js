import React from 'react'
import {View,Text,StyleSheet} from 'react-native'


export default class LoadingScreen extends React.Component{
    render(){
        return(
             <View style={style.Container}>
                 <Text>LoadingScreen</Text>
             </View>
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