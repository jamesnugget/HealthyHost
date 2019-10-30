import React from 'react';
import { Platform, StyleSheet, View, Text, Image, ScrollView, Dimensions, StatusBar, Linking } from 'react-native';
import { Button } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import SafariView from 'react-native-safari-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

/* Imports app information from language files */
import I18n from './locales/i18n.js';

/* Stores default keys from english language file to control menu selections and other components */
var object = require('./locales/en.json');

/* Grabs frame height and stores it as a constant */
const { height } = Dimensions.get('window');

export default class HomeScreen extends React.PureComponent {

  static navigationOptions = {
    /* turns off default header for the screen */
    header: null,
  };

  /* saves the state of whatever variables is needed for current app session */
  state = {
    screenHeight: height,
    currentLanguage: "en",
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  makeList = () => {
    Output = []

    var objectSize = Object.keys(object.Text.Main_Menu_Choices).length;

    for (var i = 0; i < objectSize; i++) {
      let idx = i;

      if (object.Text.Main_Menu_Choices[idx] == "News & Events") {
        Output.push(<Button key={idx} onPress={() => {
          if (Platform.OS === 'ios') {
            SafariView.show({
              url: 'https://www.facebook.com/HealthyHouseMerced/posts/'
            });
          } else {
            Linking.openURL('https://www.facebook.com/HealthyHouseMerced/posts/');
          }
        }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '90%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Main_Menu_Choices.' + idx)}</Text></Button>);
      }
      else {
        Output.push(<Button key={idx} onPress={() => this.props.navigation.navigate(object.Text.Main_Menu_Choices[idx])} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '90%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Main_Menu_Choices.' + idx)}</Text></Button>);
      }

    }

    return Output;
  }

  /* Saves the user's language preference */
  saveLanguage = async (language) => {
    try {
      await AsyncStorage.setItem('language', language);
      this.setState({ currentLanguage: language });
    } catch (e) {
      alert(e);
    }
  }

  /* Loads the user's language preference (first load is English) */
  displayLanguage = async () => {
    try {
      let language = await AsyncStorage.getItem('language');
      if (language == null) {
        this.setState({ currentLanguage: "en" });
      }
      else {
        this.setState({ currentLanguage: language });
      }
    } catch (error) {
      alert(error);
    }
  }

  /* Main render function to display contents of current screen */
  render() {
    this.displayLanguage();
    I18n.locale = this.state.currentLanguage;
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>

          <Icon
            name="bell"
            size={35}
            color={'#007aff'}
            onPress={() => this.props.navigation.navigate("Notifications")}
            style={{
              position: 'absolute',
              right: 30,
              top: 30,
            }}
          />

          {/* Healthy House Logo */}
          <Image style={{ width: '50%', resizeMode: 'contain' }} source={require('./assets/ic_launcher.png')} />

          {/* Intro title */}
          <Text style={styles.welcome}>{I18n.t('Text.Intro')}</Text>

          {/* Individual buttons that take you to a different screen for each button */}

          <View style={{ flexDirection: 'row' }}>
            <Button onPress={() => this.saveLanguage("en")} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>English</Text></Button>
            <Button onPress={() => this.saveLanguage("spa")} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Español</Text></Button>
            <Button onPress={() => this.saveLanguage("hmn")} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Hmong</Text></Button>
          </View>

          {this.makeList()}

        </View>
      </ScrollView>
    );
  }
}

//default styling for home screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    color: '#000000',
    margin: 10,
    fontWeight: "bold",
  },
  scrollview: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: "space-between",
    padding: 10,
  },
});
