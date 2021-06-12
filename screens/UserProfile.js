import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import WhiteBtn from '../components/WhiteBtn';
import Tab from '../components/Tab';
import { useState } from 'react';

const userprofile = () => {

    const [profileImage, setProfileImage] = useState('../assets/images/Profilepic.jpeg')
    const [bgImage, setbgImage] = useState('../assets/images/bikebkgd.jpeg')
    const [name, setname] = useState('Mayank Vashistha')
    const [details, setdetails] = useState('Athlete | Football | Noida')
    const [status1, setstatus1] = useState('Believe in yourself!')
    const [status2, setstatus2] = useState('Hustler | National Record Holder | Achiever')
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.TouchBg}>
                <Image
                    style={styles.Bgimage}
                    value={profileImage}
                    source={require('../assets/images/bikebkgd.jpeg')}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.TouchPf}>
                <Image
                    style={styles.Pfimage}
                    value={bgImage}
                    source={require('../assets/images/Profilepic.jpeg')}></Image>
            </TouchableOpacity>

            <Text style={styles.name}
                value={name}
                onPress={() => setname(name)}></Text>

            <Text style={styles.details}
                value={details}
                onPress={() => setdetails(details)} ></Text>

            <Text style={styles.status1}
                value={status1}
                onPress={() => setstatus1(status1)}></Text>

            <Text style={styles.status2}>
                value={status2}
                onPress={() => setName(setstatus2)}
            </Text>

            <WhiteBtn buttonTitle="Edit Profile" />

            <View
                style={{
                    borderBottomColor: 'gray',
                    borderWidth: 1,
                    marginTop: 30,
                    width: '100%',
                }}></View>

            <Text style={styles.Connections}>My Connections</Text>

            <View
                style={{
                    borderBottomColor: 'gray',
                    borderWidth: 1,
                    marginTop: 50,
                    width: '100%',
                }}></View>

            <Tab style={{ marginTop: 10 }}></Tab>
        </View>
    );
};

export default userprofile;

const styles = StyleSheet.create({
    Bgimage: {
        height: '100%',
        alignSelf: 'center',
        width: '100%',
    },
    Pfimage: {
        height: '100%',
        alignSelf: 'center',
        width: '100%',
        borderColor: '#fff',
        borderRadius: 10,
        borderWidth: 2,
    },
    TouchBg: {
        borderColor: 'black',
        width: '100%',
        height: '22%',
        alignSelf: 'center',
    },
    name: {
        color: '#432344',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 20,
        fontWeight: 'bold',
    },
    details: {
        color: '#432344',
        alignSelf: 'center',
        fontSize: 17,
    },
    status1: {
        alignSelf: 'center',
        color: 'gray',
        paddingTop: 15,
    },
    status2: {
        alignSelf: 'center',
        color: 'gray',
    },
    Connections: {
        color: '#432344',
        fontSize: 17,
        marginTop: 5,
        marginStart: 10,
    },
    Sview: {
        marginTop: 2,
        flex: 1,
    },
    TouchPf: {
        height: '20%',
        width: '38%',
        marginTop: '-20%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#fff',
        alignSelf: 'center',
    },
});
