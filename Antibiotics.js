import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'native-base';

import I18n from './locales/i18n.js';

var object = require('./locales/en.json');

const { height } = Dimensions.get('window');

export default class AntibioticsScreen extends React.PureComponent {

  static navigationOptions = () => ({
    title: 'Healthy Host',
    headerTintColor: 'white',
    headerBackTitle: "Back",
    headerStyle: {
      backgroundColor: 'royalblue'
    }
  });

  state = {
    screenHeight: height,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  makeList = () => {

    Output = []

    var objectSize = Object.keys(object.Text.Antibiotics_Menu_Choices).length;

    for (var i = 1; i < objectSize; i++) {

      let idx = i;

      Output.push(<Button key={idx} onPress={() => this.props.navigation.navigate('Antibiotics_Info', { antibiotic: I18n.t('Text.Antibiotics_Menu_Choices.' + idx), })} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Antibiotics_Menu_Choices.' + idx)}</Text></Button>);
    }

    return Output;

  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
        <View style={{ flex: 1, alignItems: "center" }}>

          <Button onPress={() => { this.props.navigation.navigate('Antibiotics_Usage') }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Antibiotics_Menu_Choices.0')}</Text></Button>

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