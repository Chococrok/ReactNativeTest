
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class LinkedInButton extends React.Component {


  setSource() {
    this.setState((prevState) => ({
      image: prevState.image  === unactive ? active : unactive
    }));
  }

  constructor(props) {
    super(props);
    active = require('../img/Sign-In-Small---Active.png');
    unactive = require('../img/Sign-In-Small---Default.png');
    hover = require('../img/Sign-In-Small---Hover.png');
    this.state = {image: active};
  }

  render() {
    let source = this.state.image;
    return (
      <View
        onStartShouldSetResponder={ () => true }
        onResponderGrant={ (event) => this.setSource() }
        onResponderRelease={ (event) => this.setSource() }>
        <Image
          resizeMode= 'contain'
          style= {styles.button}
          source={source}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 150,
  },
});
