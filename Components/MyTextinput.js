import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text,TouchableOpacity,Alert,Press } from "react-native";

const MyTextInput = () => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');
   const onPress = () => {
      Alert.alert("Submit!!");
   };
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
        placeholder="Enter number"
      />
      <TouchableOpacity
               style = {styles.submitButton} onPress={Press}>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  submitButton:{
    height:80,
    margin:40,
    padding:10,

  },
});

export default MyTextInput;
