import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, AppRegistry, Image, Linking, ScrollView, Dimensions } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import I18n from './locales/i18n.js';

var object = require('./locales/en.json');

const { height } = Dimensions.get('window');

export default class ResourcesScreen extends React.PureComponent {

  state = {
    screenHeight: height,
  };

  handleURL = (URL) => {
    //opens link in phone web browser
    Linking.openURL(URL);
  };

  makeList = () => {
    Output = []

    var objectSize = Object.keys(object.Settings.Links).length;

    for (var i = 0; i < objectSize; i++) {
      let idx = i;

      Output.push(<Text key={idx} onPress={() => { this.handleURL(I18n.t('Settings.Links.' + idx)) }} style={{ padding: 10, textAlign: "left", fontSize: 22, color: "red" }}>{I18n.t('Settings.Links.' + idx)}</Text>);
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