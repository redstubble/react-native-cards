import React from 'react';
import { Text, SafeAreaView, Button } from 'react-native';

class Quiz extends React.Component {
  debugger;
  render() {
    return (
      <SafeAreaView
        style={[this.props.styles.container, { backgroundColor: '#ecf0f1' }]}
      >
        <Text style={this.props.styles.paragraph}>Quiz Screen</Text>
        <Button
          title="Trade screen"
          onPress={() => this.props.navigation.navigate('Quiz')}
        />
      </SafeAreaView>
    );
  }
}

export default Quiz;
