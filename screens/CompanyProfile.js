import React,{useState} from 'react';
import {
   StyleSheet,
   Text, 
   View,
   TouchableOpacity,
   Image,
   ScrollView,
  
} from 'react-native';



const CompantProfile = () =>{
    const shopData = [
        {id:'1',src:' file:///data/user/0/com.kibi/cache/rn_image_picker_lib_temp_9bb94095-640e-421b-9510-b7c7721e37ef.jpg',title:'image 1'},
        {id:'2',src:'https://firebasestorage.googleapis.com/v0/b/myapp-ef4b4.appspot.com/o/profileimg.png?alt=media&token=c3cbefb9-3dd1-445a-bfe7-ab7fded4dd19',title:'image 2'},
        {id:'3',src:'https://firebasestorage.googleapis.com/v0/b/myapp-ef4b4.appspot.com/o/profileimg.png?alt=media&token=c3cbefb9-3dd1-445a-bfe7-ab7fded4dd19',title:'image 3'},
        {id:'4',src:'https://firebasestorage.googleapis.com/v0/b/myapp-ef4b4.appspot.com/o/profileimg.png?alt=media&token=c3cbefb9-3dd1-445a-bfe7-ab7fded4dd19',title:'image 4'},
        {id:'5',src:'https://firebasestorage.googleapis.com/v0/b/myapp-ef4b4.appspot.com/o/profileimg.png?alt=media&token=c3cbefb9-3dd1-445a-bfe7-ab7fded4dd19',title:'image 5'},
        {id:'6',src:'https://firebasestorage.googleapis.com/v0/b/myapp-ef4b4.appspot.com/o/profileimg.png?alt=media&token=c3cbefb9-3dd1-445a-bfe7-ab7fded4dd19',title:'image 6'},
    ]

    const [brandName,setBrandName]=useState('Nike');
    const [TagLine,setTagLine]=useState('Spotlighting athlete and stories')
    const [tabName,setTabName]=useState('post');
    
 
    return(
        <ScrollView contentContainerStyle={{
            flexGrow: 1,  
            backgroundColor:'#FFFFFF'
        }}>
        <TouchableOpacity>
        <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/myapp-ef4b4.appspot.com/o/topback.png?alt=media&token=b76b215c-c9dc-4de2-a017-dccdb34b472b'}}
               style={styles.profileTop}/>
        </TouchableOpacity>
         <TouchableOpacity style={styles.profileImage}>
         <Image source={require('../assets/images/profileimg.png')}
               style={{width: 135,
        height: 135, }}/>  
         </TouchableOpacity>
              
        <Text style={styles.companyName}>{brandName}</Text>
        <Text style={styles.pageType}>Business Page</Text>
        <Text style={styles.tagLine}>{TagLine}</Text>

        <TouchableOpacity style={styles.followbutton}>
              <Text style={styles.followbuttonText}>Followed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shopbutton}>
              <Text style={styles.shopbuttonText}>shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editbutton}>
              <Text style={styles.editbuttonText}>Edit profile</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.followerList}>
              <Text style={styles.followerListText}>Followers</Text>
              <Text style={styles.followerListText}>list of followers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postTab} onPress={()=>setTabName('post')} >
            { tabName == 'post'?<Text style={styles.activeTab}>Posts</Text>
                            :<Text style={styles.nonactiveTab}>Posts</Text>
            }
        </TouchableOpacity>
        <TouchableOpacity style={styles.shopTab} onPress={()=>setTabName('shop')} >
            { tabName == 'shop'?<Text style={styles.activeTab}>Shop</Text>
                               :<Text style={styles.nonactiveTab}>Shop</Text>
            }
        </TouchableOpacity>
          {tabName == 'post'?(<Text style={{
                    top:120,
                    left:'15%',                                       
                }}>{tabName}</Text>):(
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        top:120,
                        marginBottom:'50%'          
                    }}>
                       {shopData.map(item=>
                       (
                        <View key={item.id}>
      <Image
        source={{uri:item.src}}
        style={{
          width: 180,
          height: 220,
          borderWidth: 2,
          borderColor: "#c35547",
          resizeMode: "contain",
          margin: 6,
        }}      
      />
      <Text>{item.title}</Text>
      </View>
                       ))}
                    
                   </View>
                    
                
      
    )
}
</ScrollView>

    )
   
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
      },
    profileTop:{        
        width: '100%',
        height: 184,
    },
    profileImage:{
        position:'absolute',
        top:97,
        alignSelf:'center',
            
    },
    profileMainSection:{
        position:'absolute',
        backgroundColor:'#FFFFFF',
        width: '100%',
        height: 573,
        left: 0,
        top: 158,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    companyName:{       
        top:70,
        fontFamily:'Poppins',
        fontStyle:'normal',
        fontWeight:'700',
        fontSize:24,
        lineHeight:25,
        alignSelf:'center',
        letterSpacing:0.15,
        color:'#432344'
    },
    pageType:{
        top:70,
        fontFamily:'Poppins',
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:18,
        lineHeight:24,
        textAlign:'center',
        letterSpacing:0.15,
        color:'#CEC6CE'
    },
    tagLine:{
        top:80,
        fontFamily:'Poppins',
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:14,
        lineHeight:18,
        textAlign:'center',
        letterSpacing:0.15,
        color:'#767D86'
    },
    followbutton:{
        top:110, 
        left:'25%',            
        textAlign:'center',
        backgroundColor:'#432344',
        width:'22%',
        borderRadius:3,
        paddingTop:6,
        paddingBottom:6             
    },
    followbuttonText:{
        color:'white',
        left:11,                      
        fontFamily:'Poppins',
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:15,
        lineHeight:25,
        letterSpacing:0.15,                      
    },
    editbutton:{
        top:105, 
        alignSelf:'center',          
        backgroundColor:'white',
        borderWidth:2,
        borderColor:'#432344',
        borderRadius:5,
        width:'40%',
        borderRadius:3,
        padding:10             
    },
    editbuttonText:{
        color:'#432344',
        left:20,                    
        fontFamily:'Poppins',
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:18,
        lineHeight:25,
        letterSpacing:0.15,                      
    },
    shopbutton:{
        top:73,
        left:'55%',
        textAlign:'center',
        backgroundColor:'#432344',
        width:'15%',
        borderRadius:3,
        paddingTop:6,
        paddingBottom:6                          
    },
    shopbuttonText:{
        color:'white',
        left:11,                      
        fontFamily:'Poppins',
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:15,
        lineHeight:25,
        letterSpacing:0.15,                      
    },
    followerList:{
        top:130,
        borderTopWidth:0.8,
        borderBottomWidth:0.8,
        borderColor:'gray'
    },
    followerListText:{
        fontFamily:'Poppins',
        fontStyle:'normal',
        fontWeight:'600',
        fontSize:17,
        lineHeight:25,
        left:20,
        letterSpacing:0.15,
        color:'#432344'
   }
   ,
   postTab:{
    top:130, 
    left:'25%',         
    textAlign:'center',
    borderRadius:3,
    paddingTop:6,
    paddingBottom:6         
    },
    activeTab:{
        color:'#FFBA00',
        left:11,                      
        fontFamily:'Poppins',
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:16,
        lineHeight:25,
        letterSpacing:0.15,                      
    },
    nonactiveTab:{
        color:'gray',
        left:11,                      
        fontFamily:'Poppins',
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:16,
        lineHeight:25,
        letterSpacing:0.15,                      
    },
    shopTab:{
        top:95,  
        left:'60%',
        textAlign:'center',
        borderRadius:3,
        paddingTop:6,
        paddingBottom:6                          
      }
    
   
})

export default CompantProfile;