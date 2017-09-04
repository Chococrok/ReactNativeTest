
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import QuizzScreen from './quizz';import NavBar from '../component/navBar';


export default class JobBoardScreen extends React.Component {


  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar name= 'Job Board'/>
        <Text>Hey there is a new Job !!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width: 150,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => Tab);
