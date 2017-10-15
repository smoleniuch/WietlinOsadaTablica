import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import MainDrawerNavigation from "components/MainDrawerNavigator"

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{flex:1}}>

      <MainDrawerNavigation />
      </View>
    );
  }
}
