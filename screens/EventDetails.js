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
  const [seeMore, setSeeMore] = useState(false);
  const item = route.params;
  return (
    <>
      <ScrollView contentContainerStyle={styles.MainContainer}>
        <Image source={item.img} style={styles.eventsImg}></Image>
        <Text style={styles.eventName}>{item.Name}</Text>

        <View style={styles.eventDetailsView}>
          <View style={styles.eventItemView}>
            <Text style={styles.eventItemText}>
              <Icon type="Entypo" name="location-pin" size={14} />
              {` ${item.location}`}
            </Text>
          </View>

          <View style={styles.eventItemView}>
            <Text style={styles.eventItemText}>
              <Icon name="calendar" type="entypo" size={14} />
              {`  ${item.Date}`}
            </Text>
          </View>

          <View style={styles.eventItemView}>
            <Text style={styles.eventItemText}>{item.sportCategory}</Text>
          </View>

          <View style={styles.eventItemView}>
            <Text style={styles.eventItemText}>{item.ageCategory}</Text>
          </View>
        </View>
        {item.desc.length > 370 ? (
          seeMore ? (
            <View>
              <Text style={styles.basicDetails}>{item.desc}</Text>
              <TouchableOpacity
                style={{top: 90, left: 16}}
                onPress={() => setSeeMore(!seeMore)}>
                <Text style={styles.basicDetailsSeemore}>See Less</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text style={styles.basicDetails}>
                {`${item.desc.slice(0, 370)}`}
              </Text>
              <TouchableOpacity
                style={{top: 90, left: 16}}
                onPress={() => setSeeMore(!seeMore)}>
                <Text style={styles.basicDetailsSeemore}>See More</Text>
              </TouchableOpacity>
            </View>
          )
        ) : (
          <Text style={styles.basicDetails}>{item.desc}</Text>
        )}

        <TouchableOpacity style={styles.downloadButton}>
          <Text>Download Brochure</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
    </>
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
    top: '6.31%',
    bottom: '64.99%',
    width: 366,
    height: 166,
    borderRadius: 16,
  },
  eventName: {
    top: '9%',
    left: '3.20%',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
    color: '#432344',
  },
  eventDetailsView: {
    top: 80,
    left: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  eventItemView: {
    margin: 10,
    backgroundColor: '#FAFAFA',
    borderRadius: 25,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  eventItemText: {
    alignSelf: 'center',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 15,
    color: '#432344',
  },
  basicDetails: {
    color: '#767D86',
    left: 16,
    top: 90,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
  },
  basicDetailsSeemore: {
    color: '#767D86',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
  },
  downloadButton: {
    left: 18,
    top: 110,
    marginBottom: '40%',
    borderColor: '#432344',
    borderWidth: 2,
    width: 150,
    alignItems: 'center',
    padding: 5,
  },
  registerButton: {
    position: 'absolute',
    left: 0,
    top: '94%',
    height: '30%',
    backgroundColor: '#432344',
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
  registerButtonText: {
    color: 'white',
    marginTop: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 24,
  },
});

export default EventDetails;
