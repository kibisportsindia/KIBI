import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Text,
  View,
  Button 
} from 'react-native';
import Skip from '../components/skip';
import SportSearch from '../components/SportSearch';
import FormButton from '../components/FormButton';



export default class Addinterests extends Component {

  render() {

    return (
      <>
      <FormButton
      buttonTitle="Next"
      onPress={()=>this.props.navigation.navigate("HomeScreen")}/>
      <View
        style={{
          backgroundColor: '#fff',
        }}>
        <Skip buttonTitle="Skip"></Skip>
        <Text
          style={{
            color: '#432344',
            fontSize: 35,
            textAlign: 'center',
            marginTop: -10,
          }}>
          Add your interests
        </Text>

        <Text
          style={{
            color: 'gray',
            fontSize: 19,
            marginTop: 0,
            textAlign: 'center',
          }}>
          Get your news feed tailored for you.{'\n'}
          You can add upto 9 sports
        </Text>
        <SportSearch></SportSearch>
      </View>
</>
    );
  }
}

