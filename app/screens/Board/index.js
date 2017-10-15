import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import TopNavHeader from 'components/TopNavHeader'
import MainMenuButton from 'components/MainMenuButton'
import styles from './styles.js'

class Board extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Board'
  };

  constructor(props){
    super(props)

    this.openDrawer = this.openDrawer.bind(this)
  }

  render() {
    return (
      <View style={styles.container}>

      <View style={styles.header}>
      <View style={styles.menuButton}/>
      <TopNavHeader style={styles.navHeader} title="TABLICA"/>
      <MainMenuButton onPress={this.openDrawer} style={styles.menuButton} />

      </View>



      <View style={styles.body}>

      </View>

      </View>
    );
  }

  openDrawer(){

    this.props.navigation.navigate('DrawerOpen')

  }
}

export default Board
