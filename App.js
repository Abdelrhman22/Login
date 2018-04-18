

import React, { Component } from 'react';
import {
  StyleSheet,
  View ,
  StatusBar
} from 'react-native';

import Routes from './src/Routes';
import RootNavigator from './src/RootNavigator';

export default class App extends Component<{}> {
  render() {
    return (
    //  <View  style={styles.container}>
    //  <StatusBar
    //     backgroundColor="#1c313a"
    //     barStyle="light-content"
    //   />
    //  <Routes/>
    //  </View>
      <RootNavigator/>
    );
  }
}

const styles = StyleSheet.create({
 container :
 {
  flex:1,
 }

});
