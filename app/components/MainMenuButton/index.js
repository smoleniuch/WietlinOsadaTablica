import {View, Text} from 'react-native'
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles.js'
export default ({title,style, ...buttonProps}) =>{

  console.log(buttonProps)

  return (

    <View style={[styles.container, style]}>

    <Icon.Button
      iconStyle={{marginRight:0}}
      marginRight={0}
      underlayColor={'#405643'}
      size={30}
      name="navicon"
      backgroundColor={'transparent'}
      onPress={()=>{console.log(1)}}
      {...buttonProps}>
      </Icon.Button>

      </View>
  )



}
