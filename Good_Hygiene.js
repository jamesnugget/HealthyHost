import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, StatusBar } from 'react-native';
import { Button } from 'native-base';
import { Player } from '@react-native-community/audio-toolkit';
import AsyncStorage from '@react-native-community/async-storage';

import I18n from './locales/i18n.js';

var object = require('./locales/en.json');

var string = "";

const { height } = Dimensions.get('window');

export default class GoodHygieneScreen extends React.PureComponent {

  p: Player | null;

  playbackOptions = {
    autoDestroy: false,
    continuesToPlayInBackground: false
  };

  static navigationOptions = () => ({
    title: 'Healthy Host',
    headerTintColor: 'white',
    headerBackTitle: "Back",
    headerStyle: {
      backgroundColor: 'royalblue'
    }
  });

  retrieveLanguage = async () => {
    try {
      string = await AsyncStorage.getItem('language');
    } catch (error) {
      alert(error);
    }
  }

  //will destroy the player once the user leaves the screen
  componentWillUnmount() {
    this.p.destroy();
  }

  makeAudioButtons = () => {

    Output = []

    Output.push(<Button key={0} onPress={() => { this.p.play() }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Play</Text></Button>);
    Output.push(<Button key={1} onPress={() => { this.p.pause() }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Pause</Text></Button>);
    Output.push(<Button key={2} onPress={() => { this.p.stop() }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Stop</Text></Button>);

    return Output;
  };

  state = {
    screenHeight: height,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  //gets the list of questions and puts them into the overall output array
  makeList = () => {

    Steps = []

    var objectSize = Object.keys(object.Oral_Health.Good_Hygiene).length;

    //grabs single questions and adds them to the array
    for (i = 0; i < objectSize; i++) {
      var listIndex = (i + 1).toString();
      var string1 = listIndex + '. ' + I18n.t('Oral_Health.Good_Hygiene.' + i + '.Step');
      var string2 = I18n.t('Oral_Health.Good_Hygiene.' + i + '.Info');

      Steps.push(<View key={i}><Text style={{ padding: 10, fontSize: 30, color: "black", fontWeight: "bold" }}>{string1}</Text><Text style={{ padding: 10, fontSize: 22, color: "black" }}>{string2}</Text></View>);
    }

    return Steps;
  }

  render() {
    this.retrieveLanguage();

    var audio = string + "_" + "good_hygiene.aac";

    this.p = new Player(audio, this.playbackOptions);
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1 }}>

          <View style={{ flexDirection: 'row', justifyContent: "center" }}>
            {this.makeAudioButtons()}
          </View>

          {/* Displays questions onto view */}
          {this.makeList()}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollview: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: "space-between",
    padding: 10,
  },
});