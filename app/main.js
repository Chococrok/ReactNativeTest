/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  TextInput
} from 'react-native';
import LinkedInButton from './component/linkedInButton';
import HomeScreen from './screens/home';
import QuizzScreen from './screens/quizz';
import ProfileScreen from './screens/profile';
import EventScreen from './screens/event';
import JobBoardScreen from './screens/jobBoard';
import QuizzDetailsScreen from './screens/quizzDetails';

import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';


export default class MainScreen extends Component {

  static navigationOptions = {
  };

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Tomahawk!
        </Text>
        <Text>
          I am:
        </Text>

        <View style={styles.box}>
          <TextInput
            style= {styles.input}
            placeholder="Email"
            onChangeText={(email) => this.setState({email})}/>
          <TextInput
            style= {styles.input}
            placeholder="Password"
            onChangeText={(password) => this.setState({password})}/>
          </View>

        <View style={styles.box}>
          <TouchableHighlight style={styles.button} underlayColor="white" onPress={() => navigate('tab')}>
            <Text style={ styles.buttonText }>I am from Alan Allman</Text>
          </TouchableHighlight>
          <LinkedInButton />
        </View>

      </View>
    );
  }
}

export const HomeStack = StackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
});

export const QuizzStack = StackNavigator({
    Quizz: {
      screen: QuizzScreen,
      navigationOptions: {
        header: null
      }
    },
    quizzDetails: {
      screen: QuizzDetailsScreen
    },
});

export const Tab = TabNavigator(
  {
  home: { screen: HomeStack },
  profile: { screen: ProfileScreen },
  event: { screen: EventScreen },
  quizz: { screen: QuizzStack },
  jobBoard: { screen: JobBoardScreen },
  },
  {
    tabBarPosition: 'bottom'
  }
);

export const drawer = DrawerNavigator(
  {
    main: {
      screen: MainScreen,
    },
    Home: {
      screen: HomeStack,
    },
    tab: {
      screen: Tab,
      navigationOptions: {
        header: null
      }
    },
    Notifications: {
      screen: ProfileScreen,
    },
  }
);



const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    marginBottom: 5,
    backgroundColor: 'grey',
    padding: 5,
    borderRadius: 5,
    width: 150,
  },
  buttonText: {
    textAlign: 'center'
  },
  input: {
    width: 200,
    textAlign: 'center',
  },
  box: {
    marginTop: 50
  }
});

AppRegistry.registerComponent('AwesomeProject', () => drawer);
