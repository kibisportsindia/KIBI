import React, { Component } from 'react';
import {
  Text,
  View,


} from 'react-native';
import Skip from '../components/skip';
import SportSearch from '../components/SportSearch';



export default class Addinterests extends Component {

  render() {

    return (
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
    );
  }
}

