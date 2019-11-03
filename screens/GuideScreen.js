import React from 'react';
import { Text, StyleSheet, } from 'react-native';

const GuideScreen = (props) => {
  return (
    <Text>指南書</Text>
  );
};

GuideScreen.navigationOptions = () => {
  return {
    headerTitle: "指南書",
  };
};

export default GuideScreen;
