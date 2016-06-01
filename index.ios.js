/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
var Login = require('./component/view/Login')
var Dimensions = require('Dimensions');
var UserService = require('./component/network/UserService');

import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
    TouchableHighlight,
    ListView,
    Text
} from 'react-native';

class maridress extends Component {

    view() {
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

    render() {
        return this.view();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        marginLeft: 10,
    },
    welcome: {
        flex: 1
    }
});

AppRegistry.registerComponent('maridress', () => maridress);
