import React from 'react';
import {
   StyleSheet,
   Text, 
   View,
   TouchableOpacity,
   NativeModules
} from 'react-native';

import { SocialIcon } from 'react-native-elements'
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import InstagramLogin from 'react-native-instagram-login';
import CookieManager from '@react-native-community/cookies'


const { RNTwitterSignIn } = NativeModules;

RNTwitterSignIn.init('iTHZYbPouJnlcREkuGNAfOxxl', '62QHy4ll2ejFzH5GoNnABBTMrayuggekm2biin0kPbuRIXxmnG').then(() =>
  console.log('Twitter SDK initialized'),
);

const AddSocialAccount = () => {
    onclickFaceBook = async() =>{
        const result = await LoginManager.logInWithPermissions(['public_profile','email']);
        if (result.isCancelled) {
          console.log('User cancelled the login process');
          return;
        }    
        
        const data = await AccessToken.getCurrentAccessToken();    
        if (!data) {
          console.log('Something went wrong obtaining access token');
          return;
        }    
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      
        // Sign-in 
        const url = await auth().signInWithCredential(facebookCredential);   
        //console log user profile url
        console.log(url)   
      }
      
      onclickTwitter = async () =>{
        try {
          const { authToken, authTokenSecret } = await RNTwitterSignIn.logIn();
  
          // Create a Twitter credential with the tokens
          const twitterCredential = auth.TwitterAuthProvider.credential(authToken, authTokenSecret);
    
          // Sign-in the user with the credential
          const profile= await  auth().signInWithCredential(twitterCredential);
          const url = "https://twitter.com/"+profile.additionalUserInfo.username;
          console.log(url);
        } catch (error) {
          console.log(error);
        }
       
  
        }

        setIgToken = (data) => {
          console.log('data', data)
        }
        onClear = ()=> {
          CookieManager.clearAll(true)
            .then((res) => {
              console.log('clear')
            });
        } 
return(
    <>
     <View style = {styles.Container}>
        <View>
       <Text style = {styles.heading}>Add Social Accounts</Text>
     </View>
     <View>
       <Text style = {styles.intro}>Verify your account to get</Text>
       <Text style = {styles.intro}>most out here</Text>
     </View>
     <View style = {styles.connectionButtonContainer}>
       <TouchableOpacity style = {styles.connectionButton} onPress={()=>onclick('Linkdin')}>
       <SocialIcon type='linkedin'        
         style = {{
             backgroundColor:'#432344',
             shadowColor:'white',
             borderRadius:10,
             height: 32,
             width: 32,
             marginLeft:20
           }}
          /> 
       <Text style = {styles.connectionButtonText}>Connect Linkedin</Text>
       </TouchableOpacity>
       <TouchableOpacity style = {styles.connectionButton} onPress={()=>{this.instagramLogin.show(),
       this.onClear()}}>
       <SocialIcon type='instagram'
        iconColor='#432344'
        style = {{
         backgroundColor:'white',
         shadowColor:'white',
         borderColor:'#432344',
         height: 32,
         width: 32,
         marginLeft:20    
        }}
       /> 
       <Text style = {styles.connectionButtonText}>Connect Instagram</Text>
       </TouchableOpacity>
       <TouchableOpacity style = {styles.connectionButton} onPress={()=>onclickFaceBook()}>
       <SocialIcon type='facebook'
         style = {{
             backgroundColor:'#432344',
             shadowColor:'white',
             borderColor:'#432344',
             height: 35,
             width: 35,
             marginLeft:20
             }}
       />   
       <Text style = {styles.connectionButtonText}>Connect Facebook</Text>
       </TouchableOpacity>
       <TouchableOpacity style = {styles.connectionButton} onPress={()=>onclickTwitter()}>
       <SocialIcon
         type='twitter'
         iconColor='#432344'
         style = {{
           backgroundColor:'none',
           shadowColor:'white',
           height: 32,
           width: 32,
           marginRight:50,
           marginLeft:20
         }}
       />   
       <Text style = {styles.connectionButtonText}>Connect Twitter</Text>
       </TouchableOpacity>
       <InstagramLogin style = {styles.connectionButton}
          ref={ref => (this.instagramLogin = ref)}
          appId='955668771927794'
          appSecret='e836b8219be2416ed9c742ad440e5dcd'
          redirectUrl='https://www.google.com/'
          scopes={['user_profile', 'user_media']}
          onLoginSuccess={setIgToken}
          onLoginFailure={(data) => console.log(data)}
        />
     </View>
     <TouchableOpacity style={styles.nextButton} onPress={()=>onclick('Next')}>
       <Text style={styles.button} >Next</Text>
     </TouchableOpacity>
     </View>  
     
    </>
)
}

const styles = StyleSheet.create({
    Container:{ 
    },
    heading:{
      color:'#432344',
      fontSize:30,
      marginTop:50,
      alignSelf:'center',
      fontWeight:'600',
      letterSpacing:2
    },
    intro:{
      alignSelf:'center',
      color:'gray',
      fontSize:19,
      fontWeight:'600',
      letterSpacing:0.8
    },
    connectionButtonContainer:{
      marginTop:25,
      marginBottom:70,
    },
    connectionButtonText:{
      color:'#432344',
      fontSize:22,
      fontWeight:'600',
      letterSpacing:2,
      position:'absolute',
      marginTop:12,
      marginLeft:80,
      
    },
    connectionButton: {
      backgroundColor:'white',
      borderWidth:2,
      borderColor:'#432344',
      borderRadius:5,
      alignSelf:'center',
      color:'#432344',
      width:'90%',
      marginTop:25,
      fontSize:25,
      padding:6,
      fontWeight:'600',
      letterSpacing:2
    },
    connectionIcon:{
      width:40,
      height:25,
      backgroundColor:'#432344'
    },
    nextButton:{
      backgroundColor:'#432344',
      width:'80%',
      alignSelf:'center',
      padding:10,
      shadowColor: '#432344',
      shadowOpacity:100,
      borderRadius:5
      
    },
    button:{
      color:'white',
      fontSize:22,
      alignSelf:'center',
      
      
    }
  });
export default AddSocialAccount;