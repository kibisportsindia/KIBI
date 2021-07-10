import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,

} from 'react-native';
import TabBtn from '../components/TabBtn'

var TabView = (tabName) => {
    if (tabName == 'mypost') {
        return (
            (
                <View style={{ flex: 1, height: '100%' }}>
                    <Text style={styles.textTab}>
                        No posts yet
                    </Text>
                    <TabBtn buttonTitle="Add Posts" />
                </View>
            )
        );
    }
    else if (tabName == 'services') {
        return (
            (
                <View>
                    <Text style={styles.textTab}>
                        No services
                    </Text>
                    <TabBtn buttonTitle='Add Services' />
                </View>
            )
        );
    }
    else if (tabName == 'funds') {
        return (
            (
                <View>
                    <Text style={styles.textTab}>
                        Start a Campaign to raise funds
                    </Text>
                    <TabBtn buttonTitle='Start a Campaign' />
                </View>
            )
        );
    }
    else if (tabName == 'about') {
        return (
            (
                <View>
                    <TouchableOpacity>
                        <Text style={styles.List}>Experience</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.List}>Awards/Recognitions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.List}>Coach</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.List}>Academy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.List}>Education</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.List}>Interests</Text>
                    </TouchableOpacity>
                </View>
            )
        );
    }
}

const CompantProfile = () => {

    const [tabName, setTabName] = useState('');

    return (
        <ScrollView contentContainerStyle={{
            flexGrow: 1,

        }}>

            <TouchableOpacity style={styles.postTab} onPress={() => setTabName('mypost')} >
                {tabName == 'mypost' ? <Text style={styles.activeTab}>Posts</Text>
                    : <Text style={styles.nonactiveTab}>Posts</Text>
                }
            </TouchableOpacity>
            <TouchableOpacity style={styles.servicesTab} onPress={() => setTabName('services')} >
                {tabName == 'services' ? <Text style={styles.activeTab}>My Services</Text>
                    : <Text style={styles.nonactiveTab}>My Services</Text>
                }
            </TouchableOpacity>
            <TouchableOpacity style={styles.fundTab} onPress={() => setTabName('funds')} >
                {tabName == 'funds' ? <Text style={styles.activeTab}>Raise Funds</Text>
                    : <Text style={styles.nonactiveTab}>Raise Funds</Text>
                }
            </TouchableOpacity>
            <TouchableOpacity style={styles.aboutTab} onPress={() => setTabName('about')} >
                {tabName == 'about' ? <Text style={styles.activeTab}>About</Text>
                    : <Text style={styles.nonactiveTab}>About</Text>
                }
            </TouchableOpacity>
            <View>
                {TabView(tabName)}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    postTab: {
        left: '2%',
        paddingTop: 6,
        paddingBottom: 6
    },

    servicesTab: {
        top: '-15%',
        left: '20%',
        fontSize: 20,
        paddingTop: 6,
        paddingBottom: 6
    },
    fundTab: {
        top: '-30%',
        left: '50%',
        fontSize: 20,
        paddingTop: 6,
        paddingBottom: 6
    },
    aboutTab: {
        top: '-45%',
        left: '80%',
        fontSize: 20,
        borderRadius: 3,
        paddingTop: 6,
        paddingBottom: 0
    },
    activeTab: {
        color: '#FFBA00',
        left: 11,
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
    textTab: {
        color: 'gray',
        alignSelf: 'center'
    },
    List: {
        color: 'black',
        fontSize: 25,
        marginStart: '3%'
    }

})

export default CompantProfile;