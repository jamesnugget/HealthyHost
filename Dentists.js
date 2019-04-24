import React from 'react';
import { Platform, StyleSheet, View, Text, AppRegistry, Image, Linking, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { InteractionManager } from 'react-native';

import I18n from './locales/i18n.js';

var object = require('./locales/en.json');

//gets height of phone screen
const { height } = Dimensions.get('window');

export default class DentistsScreen extends React.PureComponent {

  //grabs info of screen height and places it as a state
  state = {
    isReady: false,
    screenHeight: height,
  };

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({ isReady: true });
    });
  }

  //grabs addresses clicked on and takes user to the map app of the platform
  handleAddresses = (address) => {
    //gets input and trims whitespace and replaces it with +'s
    var newAddress = address.split(' ').join('+');

    //check to see which platform is being used for the app and uses appropriate url for searching with appropriate map app
    if (Platform.OS === 'ios') {
      Linking.openURL('http://maps.apple.com/maps?q=' + newAddress);
    } else {
      Linking.openURL('http://maps.google.com/maps?q=' + newAddress);
    }
  };

  //grabs phone number clicked on and takes user to phone app of the platform
  handlePhones = (phone) => {
    //gets input and removes special characters
    var newPhone = phone.replace('(', '').replace(')', '').replace('-', '').replace(' ', '');

    //opens phone number like HTML5 phone link
    Linking.openURL('tel:' + newPhone);
  };

  makeList = () => {
    Hours = []

    Output = []

    var objectSize = Object.keys(object.Oral_Health.Dentist_Locations).length;

    //For loop to insert arrays of hours into the Hours[]
    for (i = 0; i < objectSize; i++) {
      var temp = []
      for (j = 0; j < 7; j++) {
        temp.push(<Text key={j} style={{ textAlign: "left", fontSize: 15, color: "black" }}>{I18n.t('Text.Days.' + j)}: {I18n.t('Oral_Health.Dentist_Locations.' + i + '.Hours.' + j)}</Text>);
      }
      Hours.push(temp);
    }

    for (i = 0; i < objectSize; i++) {
      let idx = i;
      Output.push(<View key={i}><Text style={{ textAlign: "left", fontSize: 30, color: "black", fontWeight: "bold" }}>{i + 1}. {I18n.t('Oral_Health.Dentist_Locations.' + i + '.Name')}</Text>
        <Text onPress={() => this.handleAddresses(I18n.t('Oral_Health.Dentist_Locations.' + idx + '.Address'))} style={{ textAlign: "left", fontSize: 15, color: "red" }}>{I18n.t('Oral_Health.Dentist_Locations.' + i + '.Address')}</Text>
        <Text onPress={() => this.handlePhones(I18n.t('Oral_Health.Dentist_Locations.' + idx + '.Phone'))} style={{ textAlign: "left", fontSize: 15, color: "blue" }}>{I18n.t('Oral_Health.Dentist_Locations.' + i + '.Phone')}</Text>
        <Text style={{ textAlign: "left", fontSize: 22, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Hours')}:</Text>{Hours[i]}
        <Text style={{ textAlign: "left", fontSize: 22, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Insurance')}:</Text>
        <Text style={{ textAlign: "left", fontSize: 15, color: "black" }}>{I18n.t('Oral_Health.Dentist_Locations.' + i + '.Insurance')}</Text>
        <Text style={{ textAlign: "left", fontSize: 22, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Languages')}:</Text>
        <Text style={{ textAlign: "left", fontSize: 15, color: "black" }}>{I18n.t('Oral_Health.Dentist_Locations.' + i + '.Languages')}</Text></View>);
    }

    return Output;

  };

  //changes window of screen to size of content if and only if the content size is bigger than
  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  renderPlaceholder() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#000000" />
        <Text>{I18n.t('Text.Now_Loading')}</Text>
      </View>
    )
  }

  render() {

    if (!this.state.isReady) {
      return this.renderPlaceholder();
    }

    return (
      //calls the scrollview to keep content from going off screen and not being able to scroll down
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
        <View style={styles.content}>
          {this.makeList()}
        </View>
      </ScrollView>

    );
  }
}

//styles the outer scroll view to see the rest of the content that goes off screen
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