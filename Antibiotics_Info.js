import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, AppRegistry, Image, Linking, ScrollView, Dimensions } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import I18n from './locales/i18n.js';

var object = require('./locales/en.json');

const { height } = Dimensions.get('window');

export default class AntibioticsInfoScreen extends React.PureComponent {

  handleURL = (URL) => {
    //opens link in phone web browser
    Linking.openURL(URL);
  };

  makePage = (antibiotic) => {
    Output = []

    var curr = 1;

    var objectSize = Object.keys(object.Antibiotics).length;

    for (i = 1; i < objectSize; i++) {

      var string = I18n.t('Antibiotics.' + i + '.Name');

      var n = string.localeCompare(antibiotic);

      if (n == 0) {
        curr = i;
        break;
      }
    }

    Output.push(<Text key={0} style={{ textAlign: "center", padding: 10, fontSize: 40, color: "black", fontWeight: "bold" }}>{antibiotic}</Text>);
    Output.push(<Text key={1} style={{ textAlign: "center", padding: 10, fontSize: 30, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Description')}</Text>);
    Output.push(<Text key={2} style={{ padding: 10, fontSize: 22, color: "black" }}>{I18n.t('Antibiotics.' + curr + '.Description')}</Text>);
    Output.push(<Text key={3} style={{ textAlign: "center", padding: 10, fontSize: 30, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Uses')}</Text>);
    Output.push(<Text key={4} style={{ padding: 10, fontSize: 22, color: "black" }}>{I18n.t('Antibiotics.' + curr + '.Uses')}</Text>);
    Output.push(<Text key={5} style={{ textAlign: "center", padding: 10, fontSize: 30, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Add_Info')}</Text>);
    Output.push(<Text key={6} onPress={() => { this.handleURL(I18n.t('Antibiotics.' + curr + '.Add_Info')) }} style={{ padding: 10, fontSize: 22, color: "red" }}>{I18n.t('Antibiotics.' + curr + '.Add_Info')}</Text>);

    return Output;
  }

  //This funciton only applies to the "Hmong" language for now
  makeAudioButtons = () => {
    var string = I18n.locale;

    var n = string.localeCompare("hmn");

    Output = []

    if (n == 0) {
      Output.push(<Button key={0} onPress={() => { alert("Now playing audio.") }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Ua si</Text></Button>);
      Output.push(<Button key={1} onPress={() => { alert("Audio is paused.") }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Ncua</Text></Button>);
      Output.push(<Button key={2} onPress={() => { alert("Audio has stopped.") }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Nres</Text></Button>);
    }
    return Output;
  };

  state = {
    screenHeight: height,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  render() {

    const { navigation } = this.props;

    const antibiotic = navigation.getParam('antibiotic');

    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
        <View style={{ flex: 1 }}>

          <View style={{ flexDirection: 'row', justifyContent: "center" }}>
            {this.makeAudioButtons()}
          </View>

          {this.makePage(antibiotic)}
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