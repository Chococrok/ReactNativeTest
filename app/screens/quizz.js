
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import NavBar from '../component/navBar';

export default class QuizzScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <NavBar name= 'Quizz'/>
        <FlatList
          data={[
            {
              key: 'caca',
              quizzItem: {
              name: 'Inovans',
              difficulty: 'hard'
            }},
            {
              key: 'caca2',
              quizzItem: {
              name: 'Mario',
              difficulty: 'hard'
            }},
            {
              key: 'caca3',
              quizzItem: {
              name: 'Luidgi',
              difficulty: 'hard'
            }},
            {
              key: 'caca4',
              quizzItem: {
              name: 'Nintendo',
              difficulty: 'hard'
            }},
            {
              key: 'caca5',
              quizzItem: {
              name: 'Football',
              difficulty: 'hard'
            }},
            {
              key: 'caca6',
              quizzItem: {
              name: 'Jenna',
              difficulty: 'hard'
            }},
            {
              key: 'caca7',
              quizzItem: {
              name: 'React',
              difficulty: 'hard'
            }},
            {
              key: 'caca8',
              quizzItem: {
              name: 'Ideas',
              difficulty: 'hard'
            }},
          ]}
          renderItem={({item}) =>
            <View
              style= {styles.box}
              onStartShouldSetResponder={ () => true }
              onResponderRelease={ (event) => navigate('quizzDetails', { quizzDetail: {
                name: item.quizzItem.name,
                difficulty: item.quizzItem.difficulty
              }}) }>
              <Text style={styles.item}>Name: {item.quizzItem.name}</Text>
              <Text style={styles.item}>Difficulty: {item.quizzItem.difficulty}</Text>
            </View>
          }
        />
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
  box: {
    width: 300,
    alignItems: 'center',
    padding: 50,
    borderBottomWidth: 2,
    borderColor: '#d6d7da'
  },
});
