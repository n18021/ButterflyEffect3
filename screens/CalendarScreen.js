import React from 'react';
import { Text, StyleSheet, } from 'react-native';

const CalendarScreen = (props) => {
  return (
    <Text>Calendar Screen</Text>
  );
};

CalendarScreen.navigationOptions = () => {
  return {
    headerTitle: "アルバムカレンダー",
  };
};

export default CalendarScreen;

