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
      Name:
        'SLOVENIA FUTURE SERIES 2020: BadmintonSLOVENIA FUTURE SERIES 2020: Badminton SLOVENIA FUTURE SERIES 2020: Badminton',
      img: require('../assets/images/event.png'),
      Date: 'June 06, 2021',
      location: 'USA',
      sportCategory: 'Badminton',
      ageCategory: 'Under 19',
      desc: 'Lorem ipsum dolor sit amet',
    },
    {
      id: '2',
      Name: 'Turkey Junior Open 2020:Badminton ',
      img: require('../assets/images/event.png'),
      Date: 'June 06, 2021',
      location: 'USA',
      sportCategory: 'Badminton',
      ageCategory: 'Under 19',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdietLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdiet See',
    },
    {
      id: '3',
      Name: 'Event 3',
      img: require('../assets/images/event.png'),
      Date: 'June 06, 2021',
      location: 'USA',
      sportCategory: 'Badminton',
      ageCategory: 'Under 19',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdietLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdiet See',
    },
    {
      id: '4',
      Name: 'Event 4',
      img: require('../assets/images/event.png'),
      Date: 'June 06, 2021',
      location: 'USA',
      sportCategory: 'Badminton',
      ageCategory: 'Under 19',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdietLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdiet See',
    },
    {
      id: '5',
      Name: 'Event 4',
      img: require('../assets/images/event.png'),
      Date: 'June 06, 2021',
      location: 'USA',
      sportCategory: 'Badminton',
      ageCategory: 'Under 19',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdietLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdiet See',
    },
    {
      id: '6',
      Name: 'Event 4',
      img: require('../assets/images/event.png'),
      Date: 'June 06, 2021',
      location: 'USA',
      sportCategory: 'Badminton',
      ageCategory: 'Under 19',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdietLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdiet See',
    },
    {
      id: '7',
      Name: 'Event 4',
      img: require('../assets/images/event.png'),
      Date: 'June 06, 2021',
      location: 'USA',
      sportCategory: 'Badminton',
      ageCategory: 'Under 19',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdietLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdiet See',
    },
  ];
  const nearMeEvents = [
    {
      id: '1',
      Name: 'SLOVENIA FUTURE SERIES 2020: Badminton',
      img: require('../assets/images/nearMe.png'),
      Date: 'June 06, 2021',
      location: 'India ',
      sportCategory: 'Badminton',
      ageCategory: 'Under 19',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdietLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdiet See',
    },
    {
      id: '2',
      Name: 'Turkey Junior Open 2020:Badminton',
      img: require('../assets/images/nearMe.png'),
      Date: 'June 06, 2021',
      location: 'India',
      sportCategory: 'Badminton',
      ageCategory: 'Under 19',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdietLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdiet See',
    },
  ];
  const nationalEvents = [
    {
      id: '1',
      Name: 'SLOVENIA FUTURE SERIES 2020: Badminton',
      img: require('../assets/images/National.png'),
      Date: 'June 06, 2021',
      location: 'India',
      sportCategory: 'Badminton',
      ageCategory: 'Under 19',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdietLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdiet See',
    },
    {
      id: '2',
      Name: 'Turkey Junior Open 2020:Badminton',
      img: require('../assets/images/National.png'),
      Date: 'June 06, 2021',
      location: 'India',
      sportCategory: 'Badminton',
      ageCategory: 'Under 19',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdietLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdiet See',
    },
    {
      id: '3',
      Name: 'Event 3',
      img: require('../assets/images/National.png'),
      Date: 'June 06, 2021',
      location: 'India',
      sportCategory: 'Badminton',
      ageCategory: 'Under 19',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdietLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ligula hendrerit, laoreet lacus in, sagittis nibh. Praesent at consequat arcu. Maecenas sollicitudin bibendum lacus, id finibus turpis pretium sed. Maecenas a Vestibulum justo ipsum, vestibulum at imperdiet See',
    },
  ];
  return (
    <ScrollView style={styles.MainContainer}>
      <View style={styles.header}>
        <TouchableOpacity style={{margin: 10}}>
          <Icon type="Entypo" name="menu" color="#432344" size={30} />
        </TouchableOpacity>
        <Text style={styles.heading}>KIBI Sports</Text>
        <TouchableOpacity style={{left: 150}}>
          <Icon
            type="Feather"
            name="search"
            color="#432344"
            size={30}
            style={{marginTop: 10}}
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
                  <Text style={styles.eventText}>
                    <Icon type="Entypo" name="location-pin" size={15} />
                    {item.location}
                  </Text>
                </View>
                <View style={{top: 30, flexDirection: 'row', flexWrap: 'wrap'}}>
                  <Text style={styles.eventText}>
                    <Icon
                      name="calendar"
                      type="entypo"
                      style={{marginRight: 5}}
                      size={15}
                    />
                    {item.Date}
                  </Text>
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
              <Image
                resizeMode={'stretch'}
                source={item.img}
                style={styles.eventsCardImg}></Image>

              <View style={styles.eventCardContent}>
                <Text numberOfLines={5} style={styles.eventTitle}>
                  {item.Name}
                </Text>

                <View style={{top: 20, flexDirection: 'row', flexWrap: 'wrap'}}>
                  <Text style={styles.eventText}>
                    <Icon type="Entypo" name="location-pin" size={15} />
                    {item.location}
                  </Text>
                </View>
                <View style={{top: 30, flexDirection: 'row', flexWrap: 'wrap'}}>
                  <Text style={styles.eventText}>
                    <Icon
                      name="calendar"
                      type="entypo"
                      style={{marginRight: 5}}
                      size={15}
                    />
                    {item.Date}
                  </Text>
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
                  <Text style={styles.eventText}>
                    <Icon type="Entypo" name="location-pin" size={15} />
                    {item.location}
                  </Text>
                </View>
                <View style={{top: 30, flexDirection: 'row', flexWrap: 'wrap'}}>
                  <Text style={styles.eventText}>
                    <Icon
                      name="calendar"
                      type="entypo"
                      style={{marginRight: 5}}
                      size={15}
                    />
                    {item.Date}
                  </Text>
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
    marginTop: 10,
    padding: 5,
    left: 70,
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
    flexDirection: 'row',
    borderColor: '#CEC6CE',
    borderWidth: 2,
    borderRadius: 12,
    margin: 10,
  },
  eventsCardImg: {
    width: '28%',
    height: '97%',
    marginTop: 3,
    marginLeft: 3,
    marginRight: 5,
    marginBottom: 3,
    borderRadius: 3,
  },
  eventCardContent: {
    flex: 1,
    flexDirection: 'column',
  },
  eventTitle: {
    left: 5,
    top: 10,
    flexShrink: 1,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 24,
    color: '#432344',
  },
  eventText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 24,
    color: '#432344',
  },
  eventsDetails: {
    marginTop: 40,
    marginBottom: 20,
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
