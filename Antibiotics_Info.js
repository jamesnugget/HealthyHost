import React from 'react';
import { Platform, StyleSheet, View, Text, Linking, ScrollView, Dimensions, StatusBar } from 'react-native';
import { Button } from 'native-base';
import SafariView from 'react-native-safari-view';

import I18n from './locales/i18n.js';

var object = require('./locales/en.json');

const { height } = Dimensions.get('window');

export default class AntibioticsInfoScreen extends React.PureComponent {

  static navigationOptions = () => ({
    title: 'Healthy Host',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'royalblue',
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
    //var string = I18n.locale;

    //var n = string.localeCompare("hmn");

    Output = []

    //if (n == 0) {
    Output.push(<Button key={0} onPress={() => { alert("Coming Soon!", "Will play audio.") }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Play</Text></Button>);
    Output.push(<Button key={1} onPress={() => { alert("Coming Soon!", "Audio will pause.") }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Pause</Text></Button>);
    Output.push(<Button key={2} onPress={() => { alert("Coming Soon!", "Audio will stop.") }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Stop</Text></Button>);
    //}
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
        <StatusBar barStyle="light-content" />
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