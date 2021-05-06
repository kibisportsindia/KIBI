import React, { Component } from 'react'
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native'
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput'
import auth from '@react-native-firebase/auth'

export default class LoginScreen extends Component {




    constructor(props){
        super(props);
        this.state={
            phoneNumber:''
        }
        
    }
    

    signInWithPhoneNumber= async()=> {
        const {phoneNumber} =this.state
       
        const confirmation = await auth().signInWithPhoneNumber('+91'+phoneNumber);
        //setConfirm(confirmation);
        //alert(this.state.confirmation)
        console.log(confirmation)
        if(confirmation._auth._authResult){
                 this.props.navigation.push("OtpLoginVerifyScreen",{'confirmation':confirmation,'phoneNumber':this.state.phoneNumber})
        }
        else{
            alert("Error")
        }
      }
    
      //async function confirmCode() {
        //try {
          //await confirm.confirm(code);
        //} catch (error) {
          //console.log('Invalid code.');
        //}
      //}



    render() {
        return (
            <>
            <View style={style.container}>
        <Image
        source={require('../assets/images/Logo2.png')}
        style={style.logo}/>
        <Text style={style.text}>Sign In</Text>
        <FormInput
        onChangeText={(phoneNumber)=>this.setState({phoneNumber:phoneNumber})}
        placeholderText="Enter Mobile Number" />
        <FormButton
        buttonTitle="Get OTP "
        onPress={()=>this.signInWithPhoneNumber()} />
         <TouchableOpacity style={style.registerButton} onPress={()=>this.props.navigation.navigate('RegisterScreen')}>
            <Text style={style.registerButtonText}>Don't Have An Account? Register Here</Text>
        </TouchableOpacity>
       </View>
    </>
        )
    }
}

const style=StyleSheet.create(
    {
        container:{
            marginTop:10,
            backgroundColor:'#ffffff',
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            padding:20,
        },

        logo:{
            marginTop:50,
            height:150,
            width:150,
            resizeMode: 'cover'
        },
        navButton:{
        },
        navButtonText:{
             fontSize:18,
             fontWeight:'500',
             color: '#2e64e5'
        },
        text:{
          marginTop:30,
          marginBottom:30,
          fontSize:30,
          color:'#432344'
        },
        registerButton:{
            marginTop:100,
            fontSize:22,
            marginBottom:5
        },
        registerButtonText:{
            color:'#432344',
            fontSize:16
        },
        Input:{
            
        }
    }
)
