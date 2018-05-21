import React from 'react';
import {
  Platform,
  StyleSheet
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Post from './Component/post';
import Quiz from './Component/quiz';
import Trade from './Component/trade';

console.log(Object.keys(createBottomTabNavigator));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

const isAndroid = Platform.OS === 'android';

export default createBottomTabNavigator(
  {
    Trade: {
      screen: Trade,
    },
    Quiz: {
      screen: Quiz,
    },
    Post: {
      screen: Post,
    },
  },
  {
    navigationOptions: {
      tabBarOnPress: () => ({
        // StatusBar.setBarStyle('light-content');
        // isAndroid && StatusBar.setBackgroundColor('#6a51ae');
        // jumpToIndex(scene.index);
      }),
      InitialRouteName: 'Home',
      headerMode: 'none',
      screenProps: { styles, isAndroid },
    },
  }
);
