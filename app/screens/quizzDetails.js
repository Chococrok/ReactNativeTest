
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import QuizzScreen from './quizz';

export default class QuizzDetailsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Quizz: ${navigation.state.params.quizzDetail.name} ${navigation.state.params.quizzDetail.difficulty} !`,
  });

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>details</Text>
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
