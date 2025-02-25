import React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const ButtonBasic = () => {
  const onPress = () => {
    Alert.alert("Tap the button!!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={onPress} title="Press ME" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onPress} title="Like" color="blue" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onPress} title="Dislike" color="blue" />
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button onPress={onPress} title="This looks great!" />
        <Button onPress={onPress} title="OK!" color="#841584" />
      </View>
    </View>
  );
};

export default ButtonBasic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  buttonContainer: {
    margin: 10,
  },
  alternativeLayoutButtonContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
