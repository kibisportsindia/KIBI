/*
  please work on code indentation it helps others in code understanding
*/

import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './screens/OnboardingScreen';
import HomeScreen from './screens/HomeScreen';
import {useEffect} from 'react';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import SignUpScreen from './screens/SignUpScreen';
import OtpVerifyScreen from './screens/OtpVerifyScreen';
import ProfileDetailsScreen from './screens/ProfileDetailsScreen';
import OtpLoginVerifyScreen from './screens/OtpLogVerifyScreen';
import AddSocialAccount from './screens/AddSocialAccounts';
import Addinterests from './screens/Addinterests';
import RegisterEventBasicDetails from './screens/RegisterEventBasicDetails';
import RegisterEventAdditionalDetails from './screens/RegisterEventAdditionalDetails';
import events from './screens/events';
import EventDetails from './screens/EventDetails';
import Tutorials from './screens/Tutorials';

const Stack = createStackNavigator();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch == true) {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen
            name="OtpVerificationScreen"
            component={OtpVerifyScreen}
          />
          <Stack.Screen
            name="ProfileDetailsScreen"
            component={ProfileDetailsScreen}
          />
          <Stack.Screen name="Addinterests" component={Addinterests} />
          <Stack.Screen name="AddSocialAccount" component={AddSocialAccount} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="RegisterEventBasicDetails"
            component={RegisterEventBasicDetails}
          />
          <Stack.Screen
            name="RegisterEventAdditionalDetails"
            component={RegisterEventAdditionalDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen
            name="OtpLoginVerifyScreen"
            component={OtpLoginVerifyScreen}
          />
          <Stack.Screen
            name="OtpVerificationScreen"
            component={OtpVerifyScreen}
          />
          <Stack.Screen
            name="ProfileDetailsScreen"
            component={ProfileDetailsScreen}
          />
          <Stack.Screen name="Addinterests" component={Addinterests} />
          <Stack.Screen name="AddSocialAccount" component={AddSocialAccount} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="RegisterEventBasicDetails"
            component={RegisterEventBasicDetails}
          />
          <Stack.Screen
            name="RegisterEventAdditionalDetails"
            component={RegisterEventAdditionalDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};
export default App;
