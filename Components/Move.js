import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";

class Move extends Component {
  state = {
    name: [
      { name: "Item 1", id: 1 },
      { name: "Item 2", id: 2 },
      { name: "Item 3", id: 3 },
      { name: "Item 4", id: 4 },
      { name: "Item 5", id: 5 },
      { name: "Item 6", id: 6 },
      { name: "Item 7", id: 7 },
      { name: "Item 8", id: 8 },
      { name: "Item 9", id: 9 },
      { name: "Item 10", id: 10 },
      { name: "Item 11", id: 11 },
      { name: "Item 12", id: 12 },
      { name: "Item 13", id: 13 },
      { name: "Item 14", id: 14 },
      
    ],
  };

  render() {
    return (
      <View>
        <ScrollView>
          {this.state.name.map((item) => (
            <View key={item.id} style={styles.item}>
              <Text>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Move;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    width: "400",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    margin: 2,
    borderColor: "#2a4944",
    borderWidth: 2,
    backgroundColor: "#d2f7f1",
  },
});
