import React,{useState} from 'react';
import {
    StyleSheet,
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    Image,
    
 } from 'react-native';
import { Icon } from 'react-native-elements'
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


 const RegisterEventAdditionalDetails = ({route}) =>{
  const [imguri,setImguri] = useState(null);
  const [imguri1,setImguri1] = useState(null);
  const [imguri2,setImguri2] = useState(null);
  const [importantDetals,setimportantDetals]  = useState('');
  const [Brochure,setBrochure] = useState(null);
  const [registrationLink,setRegistraion] = useState('');

  const chooseFile = async(imgno) => {
  
    let options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, async (response) => { 
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const imageuri = response.assets[0].uri;
          const filename = response.assets[0].fileName;
          //console.log(imageuri);
          //const reference = storage().ref(filename);
          //await reference.putFile(imageuri);
          //const url = await storage().ref(filename).getDownloadURL();
          //console.log(url);
          if(imgno == '0'){       
            setImguri(imageuri);
          }
          else if(imgno == '1'){
            setImguri1(imageuri);
          }
          else  if (imgno == '2' ){
            setImguri2(imageuri);
          }
          else{
              setBrochure(imageuri);
          }
          
        }
      });

     
 
  };
  const onsubmit = () =>{
    const {
      eventName,
      indate,
      location,
      SportsCategory,
      AgeCategory
    } = route.params;
    const formDtails = {
      eventName,
      indate,
      location,
      SportsCategory,
      AgeCategory,
      importantDetals,
      imguri,
      imguri1,
      imguri2,
      Brochure,
      registrationLink,
    }
    console.log(formDtails)
  }

    return(
        <>
         <View style={styles.headingView}>
                <Text style = {styles.heading}>Enter Additional Details</Text>
            </View>
            <View style={styles.introLineView}>
                <Text style={styles.introLine}>
                Details provided will be verfied
                </Text>
            </View>
            <View  style={{                
            height: 24,
            left: 17,
            right: 180,
            top: 200,
            
            }}>
            <Text style={styles.uploadLabel}>Upload Event Logo/Banner</Text>
            </View>
             <View style={styles.UploadButtonView}>
               
             {imguri == null ?(
                 <TouchableOpacity style={styles.attachmentButton}
                     onPress={()=>chooseFile('0')}>
                <Icon name="attachment" type="Entypo"/>
                </TouchableOpacity>
             ):(<View style={{flex:0.5,flexDirection: 'row'}}>              
               <Image source={{uri:imguri}} style={styles.uploadedImgView}
               />
               <TouchableOpacity onPress={()=>setImguri(null)}>
               <Icon name="cancel" type="MaterialIcons" color="red"/>
               </TouchableOpacity>
               </View>
             )} 

             {imguri1 == null ?(
                 <TouchableOpacity style={styles.attachmentButton}
                     onPress={()=>chooseFile('1')}>
                <Icon name="attachment" type="Entypo" />
                </TouchableOpacity>
             ):(<View style={{flex:0.5,flexDirection: 'row',}}>              
               <Image source={{uri:imguri1}} style={styles.uploadedImgView} />
               <TouchableOpacity onPress={()=>setImguri1(null)}>
               <Icon name="cancel" type="MaterialIcons" color="red"/>
               </TouchableOpacity>
               </View>
             )} 

             {imguri2 == null ?(
                 <TouchableOpacity style={styles.attachmentButton}
                     onPress={()=>chooseFile('2')}>
                <Icon name="attachment" type="Entypo" style={{alignSelf:'center'}}/>
                </TouchableOpacity>
             ):(<View style={{flex:0.5,flexDirection: 'row',}}>              
               <Image source={{uri:imguri2}} style={styles.attachmentButton}
               />
               <TouchableOpacity onPress={()=>setImguri2(null)}>
               <Icon name="cancel" type="MaterialIcons" color="red"/>
               </TouchableOpacity>
               </View>
             )} 

            </View>
            
            <View style={styles.formView}>                       
            <TextInput
            multiline={true}
            style={styles.multilineText}  placeholder="Deatails including how to 
            participate, fee details and perks.."
            value={importantDetals}
            onChangeText={(importantDetals)=> setimportantDetals(importantDetals)}>
            </TextInput>

            {Brochure == null?( 
            <TouchableOpacity style={styles.brochureButton} onPress={()=>chooseFile('3')} >
            <Text style = {styles.brochureButtonText}>Upload Brochure of event details</Text>
            <Icon name='attachment' 
                  type='entypo' 
                  color='#432344'/>
            </TouchableOpacity>):
            
            ( <View style={{flex:0.5,flexDirection: 'row',}}>              
              <Image source={{uri:Brochure}} 
              style={{  flex:0.9,
                        height:55,
                        marginBottom:20,
                        borderColor:'gray',  
                        borderWidth:1
                      }}
              />

              <TouchableOpacity onPress={()=>setBrochure(null)}>
              <Icon name="cancel" type="MaterialIcons" color="red"/>
              </TouchableOpacity>

              </View>
            )}
           
             <TextInput
            style={styles.formTextInput}  placeholder="Link for registration"
            value={registrationLink}
            onChangeText={(registrationLink)=>setRegistraion(registrationLink)}
            ></TextInput>
            </View>
           <TouchableOpacity style={styles.submitButton}
           onPress={onsubmit}>
               <Text style={{color:'#fff',fontSize:14}}>SUBMIT</Text>
           </TouchableOpacity>
        
        </>
    )
 }

 const styles = StyleSheet.create({
    headingView:{
        position:'absolute',
        width:'100%',
        height:45,
        left:18,
        top:70
    } ,
    heading:{
        fontFamily:'Poppins',
        fontStyle:'normal',
        fontWeight:'600',
        fontSize:24,
        lineHeight:40,
        color:"#432344"
    },
    uploadLabel:{
      fontFamily:'Poppins',
      fontStyle:'normal',
      fontWeight:'normal',
      fontSize:18,
      lineHeight:24,
      color:'#767D86'
    },
    UploadButtonView:{
                 flex: 1,
                 flexDirection: 'row',
                 flexWrap: 'wrap',
                 left:15,
                 top:210
    },
    attachmentButton:{ 
        width:'20%',
        height:50,
        padding:10,
        backgroundColor:'white',
        marginRight:20,
        borderColor:'gray',  
        borderWidth:1
      },
     uploadedImgView:{
      flex:0.9,                                                 
      height:50,
      borderColor:'gray',  
      borderWidth:1
    }, 
    brochureButton:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      width:'90%',
      borderColor:'gray',  
      borderWidth:1,
      height:55,
      marginBottom:20,
      borderRadius:5,
  },
  brochureButtonText:{color:'#767D86',
  flex:0.95,
  left:10
  },
  multilineText:{
    width:'90%',
    backgroundColor:'white',
    borderColor:'gray',  
    borderWidth:1,
    height:100,
    marginBottom:20,
    borderRadius:5,
    padding:10,
    textAlignVertical:'top'
},
    introLineView:{
        position: 'absolute',
        width: 338.43,
        height: 63,
        left: 18,
        top: 120
    },
    introLine:{
        fontFamily:'Poppins',
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:16,
        lineHeight:21,
        color:'#767D86'
    },
    formView:{
        position: 'absolute',
        left: 18,
        top: 300,
        width:'100%'       
    },
    formTextInput:{
        width:'90%',
        backgroundColor:'white',
        borderColor:'gray',  
        borderWidth:1,
        height:58,
        marginBottom:20,
        borderRadius:5,
        paddingHorizontal:10  
    },
    submitButton:{ position:'absolute',
    marginTop:600,
     flex:1,
     width:'50%',
     backgroundColor:'#432344',
     padding:15,
     alignSelf:'center',
     alignItems:'center',
     justifyContent: 'center',
     borderRadius: 3,}
 });

 export default RegisterEventAdditionalDetails;