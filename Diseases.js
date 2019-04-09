import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, AppRegistry, Image, ScrollView, Dimensions } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import I18n from './locales/i18n.js';

const { height } = Dimensions.get('window');

export default class DiseasesScreen extends React.PureComponent {

  state = {
    screenHeight: height,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

          <Button onPress={() => { this.props.navigation.navigate('Diseases_Info', { disease: I18n.t('Text.Diseases_Menu_Choices.0'), }) }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Diseases_Menu_Choices.0')}</Text></Button>
          <Button onPress={() => { this.props.navigation.navigate('Diseases_Info', { disease: I18n.t('Text.Diseases_Menu_Choices.1'), }) }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Diseases_Menu_Choices.1')}</Text></Button>
          <Button onPress={() => { this.props.navigation.navigate('Diseases_Info', { disease: I18n.t('Text.Diseases_Menu_Choices.2'), }) }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Diseases_Menu_Choices.2')}</Text></Button>
          <Button onPress={() => { this.props.navigation.navigate('Diseases_Info', { disease: I18n.t('Text.Diseases_Menu_Choices.3'), }) }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Diseases_Menu_Choices.3')}</Text></Button>
          <Button onPress={() => { this.props.navigation.navigate('Diseases_Info', { disease: I18n.t('Text.Diseases_Menu_Choices.4'), }) }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Diseases_Menu_Choices.4')}</Text></Button>

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