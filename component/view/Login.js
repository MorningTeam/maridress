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

class Login extends Component {
  goDerper(){

  }
  render() {
    return (
      <View style={{backgroundColor:'#f4f4f4',flex:1}}>
          <Image
              style={styles.style_image}
              source={{uri:'http://mysfony.oss-cn-hangzhou.aliyuncs.com/avatar/QQ%20Photo20140723175800.jpg'}}
              />
          <TextInput
              style={styles.style_user_input}
              placeholder='QQ号/手机号/邮箱'
              numberOfLines={1}
              autoFocus={true}
              underlineColorAndroid={'transparent'}
              textAlign='center'
          />
          <View
              style={{height:1,backgroundColor:'#f4f4f4'}}
          />
          <TextInput
              style={styles.style_pwd_input}
              placeholder='密码'
              numberOfLines={1}
              underlineColorAndroid={'transparent'}
              secureTextEntry={true}
              textAlign='center'
          />
          <View
              style={styles.style_view_commit}
           >
           <TouchableHighlight
              onPress={()=>this.goDerper()}
              underlayColor='#bbbbbb'
           >

            <Text style={{color:'#fff'}}>
               登录
            </Text>
            </TouchableHighlight>
          </View>

          <View style={{flex:1,flexDirection:'row',alignItems: 'flex-end',bottom:10}}>
             <Text style={styles.style_view_unlogin}>
                 无法登录?
            </Text>
            <Text style={styles.style_view_register}>
                 新用户
            </Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style_image:{
    borderRadius:35,
    height:270,
    width:270,
    marginTop:40,
    alignSelf:'center',
  },
  style_user_input:{
      backgroundColor:'#fff',
      marginTop:10,
      height:35,
  },
   style_pwd_input:{
      backgroundColor:'#fff',
      height:35,
  },
   style_view_commit:{
      marginTop:15,
      marginLeft:10,
      marginRight:10,
      backgroundColor:'#63B8FF',
      height:35,
      borderRadius:5,
      justifyContent: 'center',
      alignItems: 'center',
  },
  style_view_unlogin:{
    fontSize:12,
    color:'#63B8FF',
    marginLeft:10,
  },
  style_view_register:{
    fontSize:12,
    color:'#63B8FF',
    marginRight:10,
    alignItems:'flex-end',
    flex:1,
    flexDirection:'row',
    textAlign:'right',
  }
});


module.exports = Login;
