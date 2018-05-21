import React from 'react';
import { Text, SafeAreaView, Button } from 'react-native';

class Post extends React.Component {
  debugger;
  render() {
    return (
      <SafeAreaView
        style={[this.props.styles.container, { backgroundColor: '#008B7D' }]}
      >
        <Text style={[this.props.styles.paragraph, { color: '#fff' }]}>
          Post Screen
        </Text>
        <Button
          title="Trade screen"
          onPress={() => this.props.navigation.navigate('Trade')}
          color={this.props.isAndroid ? 'blue' : '#fff'}
        />
      </SafeAreaView>
    );
  }
}

export default Post;
