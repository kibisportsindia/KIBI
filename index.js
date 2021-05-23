/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import Root from './Root'
import { name as appName } from './app.json';
import UserProvider  from './Context/UserContext'

AppRegistry.registerComponent(appName, () => Root);
// AppRegistry.registerComponent(appName, () => {
//     return React.createElement(
        
//     )
// });