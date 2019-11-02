import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, StatusBar, Platform } from 'react-native';
import PushController from './pushController.js'
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-community/async-storage';
import { ListItem } from "react-native-elements";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";

import I18n from './locales/i18n.js';

const { height } = Dimensions.get('window');

export default class NotificationsScreen extends React.PureComponent {

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
    toggleNotifications: false,
    toggleBrushTeeth: false,
    notificationTime: null,
    isDateTimePickerVisible: false,
    gottenTime: false,
    notificationTitle: I18n.t('Notification.Notification_Title'),
    notificationMessage: I18n.t('Notification.Notification_Message')
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = async (date) => {
    this.hideDateTimePicker();
    var d = date;
    d.setSeconds(0);
    var n = d.toString();

    try {
      await AsyncStorage.setItem('notificationTime', n);
    } catch (e) {
      alert(e);
    }

    if (Platform.OS === 'ios') {
      this.setState({
        notificationTime: moment(d)
      });
    }
    else {
      this.setState({
        notificationTime: d
      });
    }

    PushNotification.cancelAllLocalNotifications();

    this.handleOnPress();

  };

  handleOnPress = async () => {
    if (this.state.toggleBrushTeeth == true) {

      try {
        await AsyncStorage.setItem('notificationTitle', this.state.notificationTitle);
        await AsyncStorage.setItem('notificationMessage', this.state.notificationMessage);
      } catch (e) {
        alert(e);
      }

      PushNotification.localNotificationSchedule({
        title: this.state.notificationTitle,
        message: this.state.notificationMessage,
        playSound: false,
        repeatType: 'day',
        date: this.state.notificationTime
      });
    }
  };

  toggleSwitch1 = async (value) => {
    try {
      var x = value.toString()

      await AsyncStorage.setItem('toggleNotifications', x);

      var n = x.localeCompare("false");

      if (n == 0) {
        this.setState({ toggleNotifications: false });
        await AsyncStorage.setItem('toggleBrushTeeth', x);
        this.setState({ toggleBrushTeeth: false });
        PushNotification.cancelAllLocalNotifications();
      }
      else {
        this.setState({ toggleNotifications: true });
      }
    } catch (e) {
      alert(e);
    }
  }

  toggleSwitch2 = async (value) => {
    try {
      var x = value.toString()

      await AsyncStorage.setItem('toggleBrushTeeth', x);

      var n = x.localeCompare("false");

      if (n == 0) {
        this.setState({ toggleBrushTeeth: false });
        PushNotification.cancelAllLocalNotifications();
      }
      else {
        this.setState({ toggleBrushTeeth: true });
        this.handleOnPress();
      }
    } catch (e) {
      alert(e);
    }
  }

  getToggle = async () => {
    try {
      const value1 = await AsyncStorage.getItem('toggleNotifications');
      const value2 = await AsyncStorage.getItem('toggleBrushTeeth');
      const time = await AsyncStorage.getItem('notificationTime');

      if (time == null) {
        var d = new Date(Date.now());
        d.setSeconds(0);
        var n = d.toString();

        this.setState({ notificationTime: d });

        await AsyncStorage.setItem('notificationTime', n)
      }
      else {
        if (this.state.gottenTime == false) {
          var d = new Date(time);
          d.setSeconds(0);
          this.setState({ notificationTime: d });
          this.setState({ gottenTime: true });
        }
      }

      if (value1 == null) {
        await AsyncStorage.setItem('toggleNotifications', "false");
      }
      if (value2 == null) {
        await AsyncStorage.setItem('toggleBrushTeeth', "false");
      }
      else {
        var n = value1.localeCompare("false");

        var n1 = value2.localeCompare("false");

        if (n == 0) {
          this.setState({ toggleNotifications: false });
        }
        else {
          this.setState({ toggleNotifications: true });
        }

        if (n1 == 0) {
          this.setState({ toggleBrushTeeth: false });
        }
        else {
          this.setState({ toggleBrushTeeth: true });
        }
      }
    } catch (error) {
      alert(error);
    }
  }

  render() {
    this.getToggle();
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1 }}>

          <PushController />

          <ListItem title={I18n.t('Notification.Notifications')} bottomDivider titleStyle={{ fontSize: 20 }} switch={{ onValueChange: this.toggleSwitch1, value: this.state.toggleNotifications }} />

          <Text style={{ opacity: 0.7, paddingTop: 30, paddingLeft: 10, paddingRight: 10 }}>{I18n.t('Notification.Notification_Description')}</Text>
          <ListItem topDivider bottomDivider title={I18n.t('Notification.Brush_Your_Teeth')} titleStyle={{ fontSize: 20 }} switch={{ disabled: !this.state.toggleNotifications, onValueChange: this.toggleSwitch2, value: this.state.toggleBrushTeeth }}></ListItem>
          <ListItem disabled={!this.state.toggleNotifications} bottomDivider title={I18n.t('Notification.Time')} titleStyle={{ fontSize: 20 }} onPress={this.showDateTimePicker} rightElement={<Text style={{ opacity: 0.7 }}>{moment(this.state.notificationTime).format('LT')}</Text>} />

          <DateTimePicker isVisible={this.state.isDateTimePickerVisible} onConfirm={this.handleDatePicked} onCancel={this.hideDateTimePicker} mode="time" is24Hour={false} date={new Date(this.state.notificationTime)} />

          {/*<Button onPress={this.handleOnPress} disabled={!this.state.toggleNotifications} title="TEST ME!" ></Button>

          <Text style={{ color: '#666667', paddingTop: 30, paddingLeft: 10, paddingRight: 10 }}>Alerts you for when you need to take your medication (e.g. pills, shots, etc.).</Text>
          <ListItem topDivider bottomDivider title="Take Your Medication" switch={{ disabled: !this.state.toggleNotifications }}></ListItem>*/}

        </View>
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  scrollview: {
    flexGrow: 1,
  },
});