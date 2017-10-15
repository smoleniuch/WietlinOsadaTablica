import {View, Text} from 'react-native'
import React, { Component } from 'react';
import styles from './styles.js'
export default ({title, style}) =>{

  return (

    <View style={[styles.container, style]}>
      <Text style={styles.header}>{title}</Text>
      </View>
  )

}
