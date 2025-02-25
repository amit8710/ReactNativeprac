import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class Home extends Component {
  state = {
    mystate: "Hello, it's me Amit Basnet",
  };

  updatestate = () => this.setState({ mystate: "The state is updated" });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={this.updatestate}>
          {this.state.mystate}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "blue",
  },
});

export default Home;
