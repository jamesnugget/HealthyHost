import React from 'react';
import { Platform, StyleSheet, View, Text, Linking, ScrollView, Dimensions, StatusBar } from 'react-native';
import { Button } from 'native-base';
import SafariView from 'react-native-safari-view';
import { Player } from '@react-native-community/audio-toolkit';
import AsyncStorage from '@react-native-community/async-storage';

import I18n from './locales/i18n.js';

var object = require('./locales/en.json');

const { height } = Dimensions.get('window');

export default class IllnessesInfoScreen extends React.PureComponent {

  //creates audio player as state for whole component
  p: Player | null;

  //an object that contains the settings necessary for the audio player to function properly
  playbackOptions = {
    autoDestroy: false,
    continuesToPlayInBackground: false
  };

  static navigationOptions = () => ({
    title: 'Healthy Host',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'royalblue'
    }
  });

  handleURL = (URL) => {
    //opens link in phone web browser
    if (Platform.OS === 'ios') {
      SafariView.show({
        url: URL
      });
    } else {
      Linking.openURL(URL);
    }
  };

  //function will retrieve the saved language preference of the application and set it into the "string" variable
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

  makePage = (illness) => {
    Output = []

    var curr = 0;

    var objectSize = Object.keys(object.Illnesses).length;

    for (i = 0; i < objectSize; i++) {

      var string = I18n.t('Illnesses.' + i + '.Name');

      var n = string.localeCompare(illness);

      if (n == 0) {
        curr = i;
        break;
      }
    }

    Output.push(<Text key={0} style={{ textAlign: "center", padding: 10, fontSize: 40, color: "black", fontWeight: "bold" }}>{illness}</Text>);
    Output.push(<Text key={1} style={{ textAlign: "center", padding: 10, fontSize: 30, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Description')}</Text>);
    Output.push(<Text key={2} style={{ padding: 10, fontSize: 22, color: "black" }}>{I18n.t('Illnesses.' + curr + '.Description')}</Text>);
    Output.push(<Text key={3} style={{ textAlign: "center", padding: 10, fontSize: 30, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Symptoms')}</Text>);
    Output.push(<Text key={4} style={{ padding: 10, fontSize: 22, color: "black" }}>{I18n.t('Illnesses.' + curr + '.Symptoms')}</Text>);
    Output.push(<Text key={5} style={{ textAlign: "center", padding: 10, fontSize: 30, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Treatment')}</Text>);
    Output.push(<Text key={6} style={{ padding: 10, fontSize: 22, color: "black" }}>{I18n.t('Illnesses.' + curr + '.Treatment')}</Text>);
    Output.push(<Text key={7} style={{ textAlign: "center", padding: 10, fontSize: 30, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Add_Info')}</Text>);
    Output.push(<Text key={8} onPress={() => { this.handleURL(I18n.t('Illnesses.' + curr + '.Add_Info')) }} style={{ padding: 10, fontSize: 22, color: "red" }}>{I18n.t('Illnesses.' + curr + '.Add_Info')}</Text>);

    return Output;
  }

  //This funciton only applies to the "Hmong" language for now
  makeAudioButtons = () => {
    //var string = I18n.locale;

    //var n = string.localeCompare("hmn");

    Output = []

    Output.push(<Button key={0} onPress={() => this.p.play()} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Play</Text></Button>);
    Output.push(<Button key={1} onPress={() => this.p.pause()} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Pause</Text></Button>);
    Output.push(<Button key={2} onPress={() => this.p.stop()} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Stop</Text></Button>);
    
    return Output;
  };

  state = {
    screenHeight: height,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  render() {
    //calls this function to retrieve the language setting
    this.retrieveLanguage();

    const { navigation } = this.props;

    const illness = navigation.getParam('illness');

    //creates variable named "audio" and concatinates "string" with temporary modified version of the disease parameter
    var audio = string + "_" + illness.toLowerCase().replace(/ /g, "_").normalize("NFD").replace(/[\u0300-\u036f]/g, "") + ".aac";

    //sets the state as a new audio player with the provided parameters
    this.p = new Player(audio, this.playbackOptions);

    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1 }}>

          <View style={{ flexDirection: 'row', justifyContent: "center" }}>
            {this.makeAudioButtons()}
          </View>

          {this.makePage(illness)}
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