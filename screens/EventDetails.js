import {Item} from 'native-base';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';

const EventDetails = ({route}) => {
  const item = route.params;
  return (
    <ScrollView contentContainerStyle={styles.MainContainer}>
      <Image source={item.img} style={styles.eventsImg}></Image>
      <Text style={styles.eventName}>{item.Name}</Text>
      <View
        style={{
          top: 100,
          left: 18,
          width: 110,
          height: 40,
          backgroundColor: '#FAFAFA',
          borderRadius: 25,
          padding: 10,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <Icon type="Entypo" name="location-pin" />
        <Text
          style={{
            margin: 5,
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 14,
            lineHeight: 15,
            color: '#432344',
          }}>
          {item.location}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  eventsImg: {
    left: '3.20%',
    right: '3.37%',
    top: '9.31%',
    bottom: '64.99%',
    width: 366,
    height: 166,
    borderRadius: 16,
  },
  eventName: {
    top: '12%',
    left: '3.20%',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
    color: '#432344',
  },
  basicDetails: {},
});

export default EventDetails;
