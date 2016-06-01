import React, {Component} from 'react';
import {
    AppRegistry, TouchableHighlight, StyleSheet, Text,
    View, BackAndroid, Navigator, Image
} from 'react-native';

class RoutersAndroid extends Component {
    render() {
        return (
            <View style={styles.flexContaienr}>
                <View style={styles.container}>
                    <Image style={styles.logo}
                           source={{uri: 'http://mysfony.oss-cn-hangzhou.aliyuncs.com/avatar/QQ%20Photo20140723175800.jpg'}}/>
                </View>

                <View style={styles.button}>
                        <Text style={styles.cell}>
                           登陆
                        </Text>

                        <Text style={styles.cell}>
                            注册
                        </Text>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flexContaienr: {
        //容器需要添加 direction 才能让子元素 flex
        // flexDirection: 'row',
        flex: 1,
        backgroundColor: '#eeeeee',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: '#eeeeee',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cell:{
        width: 100,
        height: 30,
        textAlign: 'center',
        backgroundColor:'#eeeeee'
    },
    logo: {
        backgroundColor: '#54d9e0',
        margin: 50,
        width: 200,
        height: 100,
    }
});
module.exports = RoutersAndroid;
