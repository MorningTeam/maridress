/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    TouchableHighlight,
    StyleSheet,
    Text,
    TextInput,
    Password,
    Image,
    View,
} from 'react-native';

class Index extends Component {
    reader() {
        return (
            <Text style={styles.titleBase}>
                I am root
                <Text style={styles.title}>
                    ~ ~ 哇哈哈
                </Text>
            </Text>
        );
    }

}

const styles = StyleSheet.create({
    titleBase:{
        margin:50,
        textAlign:'center',
        color:'red',
        fontSize:28,
        fontFamily:'Cochin',
    },
    title:{
        color:'green',
        fontWeight:'bold',
    },
});
module.exports = Index;
