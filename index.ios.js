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
  ScrollView
} from 'react-native';
import YouTube from 'react-native-youtube';

let REQUEST_URL = 'https://www.letmedoctor.com/playlist.json'

class JustListenMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {title: 'JustListenMusic', videoId: null, url: null, playlist: []};
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.playlist) {
          this.setState({url: responseData.url, playlist: responseData.playlist, videoId: responseData.playlist[0].id, playlistIdx: 0});
          console.log(this.state);
        }
      })
    .done();
  }
  changeState(e) {
    console.log(e);
    if (e.state === 'ended') {
      playlistIdx = this.state.playlistIdx;
      playlistIdx++;
      playlistIdx %= this.state.playlist.length;
      this.setState({videoId: this.state.playlist[playlistIdx].id, playlistIdx: playlistIdx});
    }
    this.setState({status: e.state});
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>
          JustListenMusic
        </Text>
        <YouTube
        ref="youtubePlayer"
        videoId={this.state.videoId}
        play={this.state.videoId ? true : false}
        hidden={false}
        playsInline={true}
        loop={true}
        origin='http://www.youtube.com'

        onReady={(e)=>{this.setState({isReady: true})}}
        onChangeState={(e)=>{this.changeState(e)}}
        onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
        onError={(e)=>{this.setState({error: e.error})}}
        onProgress={(e)=>{this.setState({currentTime: e.currentTime, duration: e.duration})}}

        style={{alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10}}
        />
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </ScrollView>
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
