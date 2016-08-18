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
  View
} from 'react-native';
import YouTube from 'react-native-youtube';

class JustListenMusic extends Component {
  render() {
    return (
      <View style={styles.container}>
      <YouTube
      ref="youtubePlayer"
      videoId="KVZ-P-ZI6W4"
      play={true}
      hidden={false}
      playsInline={true}
      loop={false}

      onReady={(e)=>{this.setState({isReady: true})}}
      onChangeState={(e)=>{this.setState({status: e.state})}}
      onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
      onError={(e)=>{this.setState({error: e.error})}}
      onProgress={(e)=>{this.setState({currentTime: e.currentTime, duration: e.duration})}}

      style={{alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10}}
      />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('JustListenMusic', () => JustListenMusic);
