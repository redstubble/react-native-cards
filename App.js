// @flow
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Trade() {
  return (
    <View style={styles.container}>
      <Text>Trade</Text>
    </View>
  );
}

function Quiz() {
  return (
    <View style={styles.container}>
      <Text>Quiz</Text>
    </View>
  );
}

function Posts() {
  return (
    <View style={styles.container}>
      <Text>Posts</Text>
    </View>
  );
}

const Tabs = createMaterialTopTabNavigator({
  Trade: {
    screen: Trade,
  },
  Quiz: {
    screen: Quiz,
  },
  Posts: {
    screen: Posts,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Tabs style={{ paddingTop: 100, backgroundColor: '#000' }} />
    );
  }
}
