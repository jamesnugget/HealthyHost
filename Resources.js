import React from 'react';
import { Platform, StyleSheet, View, Text, Linking, ScrollView, Dimensions } from 'react-native';
import SafariView from 'react-native-safari-view';

import I18n from './locales/i18n.js';

var object = require('./locales/en.json');

const { height } = Dimensions.get('window');

export default class ResourcesScreen extends React.PureComponent {

  static navigationOptions = () => ({
    title: 'Healthy Host',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'royalblue'
    }
  });

  state = {
    screenHeight: height,
  };

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

  makeList = () => {
    Output = []

    Names = ["Best Practice Advocacy Centre New Zealand", "eMedicineHealth.com", "Missouri Department of Health & Senior Services", "WebMD", "Livestrong.com", "US National Library of Medicine", "Drugs.com", "Centers for Disease Control and Prevention"]

    var objectSize = Object.keys(object.Settings.Links).length;

    for (var i = 0; i < objectSize; i++) {
      let idx = i;

      Output.push(<Text key={idx} onPress={() => { this.handleURL(I18n.t('Settings.Links.' + idx)) }} style={{ padding: 10, textAlign: "left", fontSize: 22, color: "red" }}>{Names[idx]}</Text>);
    }

    return Output;
  }

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
        <View style={{ flex: 1 }}>

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