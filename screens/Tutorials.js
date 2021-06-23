import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';

const Tutorials = props => {
  const [seeMore, setSeeMore] = useState(false);

  const sportsList = [
    {id: '1', name: 'Boxing', src: require('../assets/images/Boxing.png')},
    {id: '2', name: 'Cricket', src: require('../assets/images/Cricket.png')},
    {id: '3', name: 'Football', src: require('../assets/images/Football.png')},
    {
      id: '4',
      name: 'Badminton',
      src: require('../assets/images/Badminton.png'),
    },
    {
      id: '5',
      name: 'Baseball/Softball',
      src: require('../assets/images/Swimming.png'),
    },
    {id: '6', name: 'Running', src: require('../assets/images/Running.png')},
    {id: '7', name: 'Boxing', src: require('../assets/images/Boxing.png')},
    {id: '8', name: 'Cricket', src: require('../assets/images/Cricket.png')},
    {id: '9', name: 'Football', src: require('../assets/images/Football.png')},
  ];

  return (
    <ScrollView contentContainerStyle={styles.MainContainer}>
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

      <Text style={styles.weltutorialLine}>
        Welcome to KIBI Sports tutorials
      </Text>

      {seeMore ? (
        <Text style={styles.intro}>
          Right now looking at the world facing the pandemic has restricted
          sports in many ways, which is why we provide online training in every
          sport Right now looking at the world facing the pandemic has
          restricted sports in many ways, which is why we provide online
          training in every sport{'.  '}
          <Text
            onPress={() => setSeeMore(!seeMore)}
            style={{fontWeight: 'bold'}}>
            Read Less
          </Text>
        </Text>
      ) : (
        <Text style={styles.intro}>
          Right now looking at the world facing the pandemic has restricted
          sports in many ways, which is why we provide online training in every
          sport.....{' '}
          <Text
            onPress={() => setSeeMore(!seeMore)}
            style={{fontWeight: 'bold'}}>
            Read More
          </Text>
        </Text>
      )}

      <View style={styles.sportsView}>
        {sportsList.map(sports => (
          <TouchableOpacity key={sports.id} style={styles.sportsCard}>
            <Image source={sports.src} style={styles.cardImg} />

            <Text style={styles.cardTitle}>{sports.name}</Text>
          </TouchableOpacity>
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
  weltutorialLine: {
    top: 25,
    left: 14,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: '#000000',
  },
  intro: {
    top: 15,
    margin: 14,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.15,
    color: '#000000',
  },
  sportsView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  sportsCard: {
    marginTop: 25,
    marginLeft: 14,
    width: 112,
    height: 117,
  },
  cardImg: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    opacity: 0.9,
  },
  cardTitle: {
    position: 'absolute',
    top: '60%',
    paddingLeft: 5,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.15,
    color: '#FFBA00',
  },
});

export default Tutorials;
