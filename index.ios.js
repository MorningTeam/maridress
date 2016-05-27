/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
var Login = require('./component/view/Login')
var Dimensions = require('Dimensions');
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text
} from 'react-native';

class maridress extends Component {
  render() {
    return (

      <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title:"maridress",
        component: Login

      }}
      >
      </NavigatorIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    flex:1
  }
});

AppRegistry.registerComponent('maridress', () => maridress);
