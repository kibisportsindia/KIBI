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
        <View style={{marginTop:30,flexDirection: 'row', alignItems: 'center'}}>
             <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
            <View>
                <Text style={{width: 30, textAlign: 'center',color:'gray' }}>OR</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
            </View>
            <TouchableOpacity style = {style.connectionButton} onPress={()=>onclickGoogleLogin()}>
            <Image source = {require('../assets/images/google-logo.png')}
             style={{
               width:25,
               height:25,               
             }}/><Text style={style.connectionButtonText}>Sign in with Google</Text>
            </TouchableOpacity> 
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
        connectionButtonText:{
            fontSize:15,
            color:'gray',
            fontWeight:'700',
            position:'absolute',
            marginLeft:40,
            padding:7          
          },
          connectionButton: {
            backgroundColor:'white',
            borderWidth:0.8,
            borderColor:'gray',
            borderRadius:5,
            alignSelf:'center',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.5,
            shadowRadius: 1.41,
            alignSelf:'center',
            marginTop:30,
            width:'60%',
            padding:7,
            fontWeight:'600',
            letterSpacing:2
          },
        registerButton:{
            marginTop:85,
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
