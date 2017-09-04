import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class NavBar extends React.Component {


  render() {
    return (
      <View style={styles.header}>
        <Image
          onPress={() => navigate('tab')}
          style={styles.image}
          source= {require('../img/drawerIcon.png')}/>
        <Text style = {{textAlign: 'center'}}>{this.props.name}</Text>
        <View style={styles.image}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#d8d8d8'
  },
  image: {
    width: 25,
    height: 25,
    marginLeft: 10
  },
  spacer: {
    width: 25,
    height: 25
  }
});
