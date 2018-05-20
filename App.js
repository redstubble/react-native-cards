import React from "react";
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

console.log(Object.keys(createBottomTabNavigator));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
    alignItems: "center"
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  }
});

const isAndroid = Platform.OS === "android";

class Trade extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: "#6a51ae" }]}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Text style={[styles.paragraph, { color: "#fff" }]}>Trade Screen</Text>
      </SafeAreaView>
    );
  }
}

class Quiz extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: "#ecf0f1" }]}>
        <Text style={styles.paragraph}>Quiz Screen</Text>
        <Button
          title="Trade screen"
          onPress={() => this.props.navigation.navigate("Trade")}
        />
      </SafeAreaView>
    );
  }
}

class Post extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: "#008B7D" }]}>
        <Text style={[styles.paragraph, { color: "#fff" }]}>Post Screen</Text>
        <Button
          title="Trade screen"
          onPress={() => this.props.navigation.navigate("Trade")}
          color={isAndroid ? "blue" : "#fff"}
        />
      </SafeAreaView>
    );
  }
}

export default createBottomTabNavigator(
  {
    Trade: {
      screen: Trade
    },
    Quiz: {
      screen: Quiz
    },
    Post: {
      screen: Post
    }
  },
  {
    navigationOptions: ({navigation} = this.navigation) => ({
      tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
        // TODO: This doesn't handle the initial render because the second screen renders last. What to do?
        StatusBar.setBarStyle("light-content");
        isAndroid && StatusBar.setBackgroundColor("#6a51ae");
        // jumpToIndex(scene.index);
      }
    InitialRouteName: "Home",
    headerMode: "none"
  }
);