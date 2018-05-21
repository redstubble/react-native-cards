import React from 'react';
import { Text, SafeAreaView, StatusBar } from 'react-native';

class Trade extends React.Component {
  debugger;
  render() {
    return (
      <SafeAreaView
        style={[this.props.styles.container, { backgroundColor: '#6a51ae' }]}
      >
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Text style={[this.props.styles.paragraph, { color: '#fff' }]}>
          Trade Screen
        </Text>
      </SafeAreaView>
    );
  }
}

export default Trade;
