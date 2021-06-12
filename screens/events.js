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

const events = props => {
  const [tabName, setTabName] = useState('International');
  const internationalEvents = [
    {
      id: '1',
      Name: 'SLOVENIA FUTURE SERIES 2020: Badminton',
      img: require('../assets/images/event.png'),
      Date: 'June 06, 2021',
      location: 'USA',
    },
    {
      id: '2',
      Name: 'Turkey Junior Open 2020:Badminton',
      img: require('../assets/images/event.png'),
      Date: 'June 06, 2021',
      location: 'USA',
    },
    {
      id: '3',
      Name: 'Event 3',
      img: require('../assets/images/event.png'),
      Date: 'June 06, 2021',
      location: 'USA',
    },
    {
      id: '4',
      Name: 'Event 4',
      img: require('../assets/images/event.png'),
      Date: 'June 06, 2021',
      location: 'USA',
    },
    {
      id: '5',
      Name: 'Event 4',
      img: require('../assets/images/event.png'),
      Date: 'June 06, 2021',
      location: 'USA',
    },
    {
      id: '6',
      Name: 'Event 4',
      img: require('../assets/images/event.png'),
      Date: 'June 06, 2021',
      location: 'USA',
    },
    {
      id: '7',
      Name: 'Event 4',
      img: require('../assets/images/event.png'),
      Date: 'June 06, 2021',
      location: 'USA',
    },
  ];
  const nearMeEvents = [
    {
      id: '1',
      Name: 'SLOVENIA FUTURE SERIES 2020: Badminton',
      img: require('../assets/images/nearMe.png'),
      Date: 'June 06, 2021',
      location: 'India',
    },
    {
      id: '2',
      Name: 'Turkey Junior Open 2020:Badminton',
      img: require('../assets/images/nearMe.png'),
      Date: 'June 06, 2021',
      location: 'India',
    },
  ];
  const nationalEvents = [
    {
      id: '1',
      Name: 'SLOVENIA FUTURE SERIES 2020: Badminton',
      img: require('../assets/images/National.png'),
      Date: 'June 06, 2021',
      location: 'India',
    },
    {
      id: '2',
      Name: 'Turkey Junior Open 2020:Badminton',
      img: require('../assets/images/National.png'),
      Date: 'June 06, 2021',
      location: 'India',
    },
    {
      id: '3',
      Name: 'Event 3',
      img: require('../assets/images/National.png'),
      Date: 'June 06, 2021',
      location: 'India',
    },
  ];
  return (
    <ScrollView style={styles.MainContainer}>
      <View style={styles.header}>
        <TouchableOpacity style={{margin: 20}}>
          <Icon type="Entypo" name="menu" color="#432344" size={30} />
        </TouchableOpacity>
        <Text style={styles.heading}>KIBI Sports</Text>
        <TouchableOpacity style={{left: 75}}>
          <Icon
            type="Feather"
            name="search"
            color="#432344"
            size={30}
            style={{margin: 20}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.navigationBarView}>
        <TouchableOpacity
          style={{margin: 25}}
          onPress={() => setTabName('Near Me')}>
          {tabName == 'Near Me' ? (
            <Text style={styles.activeTab}>Near Me</Text>
          ) : (
            <Text style={styles.nonactiveTab}>Near Me</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{margin: 25}}
          onPress={() => setTabName('International')}>
          {tabName == 'International' ? (
            <Text style={styles.activeTab}>International</Text>
          ) : (
            <Text style={styles.nonactiveTab}>International</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{margin: 25}}
          onPress={() => setTabName('National')}>
          {tabName == 'National' ? (
            <Text style={styles.activeTab}>National</Text>
          ) : (
            <Text style={styles.nonactiveTab}>National</Text>
          )}
        </TouchableOpacity>
      </View>

      <View>
        {tabName == 'Near Me' &&
          nearMeEvents.map(item => (
            <View key={item.id} style={styles.eventsCard}>
              <Image source={item.img} style={styles.eventsCardImg}></Image>

              <View style={styles.eventCardContent}>
                <Text style={styles.eventTitle}>{item.Name}</Text>

                <View style={{top: 20, flexDirection: 'row', flexWrap: 'wrap'}}>
                  <Icon type="Entypo" name="location-pin" />
                  <Text style={styles.eventText}>{item.location}</Text>
                </View>
                <View style={{top: 30, flexDirection: 'row', flexWrap: 'wrap'}}>
                  <Icon
                    name="calendar"
                    type="entypo"
                    style={{marginRight: 5}}
                  />
                  <Text style={styles.eventText}>{item.Date}</Text>
                </View>

                <TouchableOpacity
                  style={styles.eventsDetails}
                  onPress={() =>
                    props.navigation.navigate('EventDetails', item)
                  }>
                  <Text>More Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        {tabName == 'International' &&
          internationalEvents.map(item => (
            <View key={item.id} style={styles.eventsCard}>
              <Image source={item.img} style={styles.eventsCardImg}></Image>

              <View style={styles.eventCardContent}>
                <Text style={styles.eventTitle}>{item.Name}</Text>

                <View style={{top: 20, flexDirection: 'row', flexWrap: 'wrap'}}>
                  <Icon type="Entypo" name="location-pin" />
                  <Text style={styles.eventText}>{item.location}</Text>
                </View>
                <View style={{top: 30, flexDirection: 'row', flexWrap: 'wrap'}}>
                  <Icon
                    name="calendar"
                    type="entypo"
                    style={{marginRight: 5}}
                  />
                  <Text style={styles.eventText}>{item.Date}</Text>
                </View>

                <TouchableOpacity
                  style={styles.eventsDetails}
                  onPress={() =>
                    props.navigation.navigate('EventDetails', item)
                  }>
                  <Text>More Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        {tabName == 'National' &&
          nationalEvents.map(item => (
            <View key={item.id} style={styles.eventsCard}>
              <Image source={item.img} style={styles.eventsCardImg}></Image>

              <View style={styles.eventCardContent}>
                <Text style={styles.eventTitle}>{item.Name}</Text>

                <View style={{top: 20, flexDirection: 'row', flexWrap: 'wrap'}}>
                  <Icon type="Entypo" name="location-pin" />
                  <Text style={styles.eventText}>{item.location}</Text>
                </View>
                <View style={{top: 30, flexDirection: 'row', flexWrap: 'wrap'}}>
                  <Icon
                    name="calendar"
                    type="entypo"
                    style={{marginRight: 5}}
                  />
                  <Text style={styles.eventText}>{item.Date}</Text>
                </View>

                <TouchableOpacity
                  style={styles.eventsDetails}
                  onPress={() =>
                    props.navigation.navigate('EventDetails', item)
                  }>
                  <Text>More Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    top: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  heading: {
    margin: 20,
    padding: 5,
    left: 40,
    fontFamily: 'Racing Sans One',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: '#432344',
  },
  navigationBarView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  activeTab: {
    color: '#FFBA00',
    left: 11,
    paddingBottom: 10,
    borderBottomColor: '#FFBA00',
    borderBottomWidth: 1,
    borderRadius: 10,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 25,
    letterSpacing: 0.15,
  },
  nonactiveTab: {
    color: 'gray',
    left: 11,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 25,
    letterSpacing: 0.15,
  },
  eventsCard: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#CEC6CE',
    borderWidth: 2,
    borderRadius: 12,
    height: 170,
    margin: 10,
  },
  eventsCardImg: {
    margin: 3,
    width: '30%',
    height: '95%',
    borderRadius: 8,
  },
  eventCardContent: {
    flex: 1,
    flexDirection: 'column',
  },
  eventTitle: {
    flexShrink: 1,
    left: 5,
    top: 10,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    color: '#432344',
  },
  eventText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 24,
    color: '#432344',
  },
  eventsDetails: {
    top: 40,
    alignSelf: 'center',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 24,
    color: '#432344',
  },
});

export default events;
