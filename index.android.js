/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';

var Index = require('./component/view/Index');
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class maridress extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.style_1}>
                    <Text style={styles.center}> Hello world</Text>
                    <Text style={{marginTop:40, fontSize:25}}>1／4高</Text>
                </View>
                <View style={[styles.style_1, {flexDirection: 'column'}]}>
                    <Text style={{marginTop:40, fontSize:25}}>1／4高</Text>
                    <Text style={{marginTop:40, fontSize:25}}>1／4高</Text>
                </View>
                <View style={{flex:10, borderWidth: 1, borderColor: 'red',}}>
                    <Text style={{marginTop:40, fontSize:25}}>1／2高</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    style_1: {
        flex: 5,
        height: 40,
        borderWidth: 1,
        borderColor: 'red'
    },
    view: {
        borderColor: 'blue',
        borderWidth: 5,
        width: 100,
        height: 40
    },
    center: {
        alignSelf: 'center',
        height: 40
    },
    left:{
        alignSelf: 'flex-start'
    },
    right: {
        alignSelf: 'flex-end'
    }
});
AppRegistry.registerComponent('maridress', () => maridress);
