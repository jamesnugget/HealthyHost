import React from 'react';
import { Platform, StyleSheet, View, Text, Image, Linking, ScrollView, Dimensions, StatusBar } from 'react-native';

import I18n from './locales/i18n.js';

//gets height of phone screen
const { height } = Dimensions.get('window');

export default class ContactScreen extends React.Component {

  static navigationOptions = () => ({
    title: 'Healthy Host',
    headerTintColor: 'white',
    headerBackTitle: "Back",
    headerStyle: {
      backgroundColor: 'royalblue'
    }
  });

  //grabs info of screen height and places it as a state
  state = {
    screenHeight: height,
  };

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

  //changes window of screen to size of content if and only if the content size is bigger than
  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  render() {

    return (
      //calls the scrollview to keep content from going off screen and not being able to scroll down
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
        <StatusBar barStyle="light-content" />
        <View style={styles.content}>

          <Image style={{ width: 180, height: 180, resizeMode: 'contain' }} source={require('./assets/earth.png')} />
          <Text style={{ fontSize: 40, color: "black", fontWeight: "bold" }}>Healthy House</Text>
          <Text onPress={() => { this.handleAddresses("301 W. 18th Street, Site. 101 Merced, CA 95340") }} style={{ textAlign: "center", fontSize: 20, color: "red" }}>301 W. 18th Street, Site. 101{"\n"}Merced, CA 95340</Text>
          <Text onPress={() => { this.handlePhones("(209)724-0102") }} style={{ fontSize: 20, color: "blue" }}>(209) 724-0102</Text>
          <Text onPress={() => Linking.openURL('mailto:Nai@healthyhousemerced.org').catch(err => { alert(I18n.t('Text.Email_Err')) })} style={{ fontSize: 20, color: "green" }}>Nai@healthyhousemerced.org</Text>

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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});