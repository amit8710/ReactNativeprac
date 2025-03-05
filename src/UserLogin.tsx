import React, { FC, ReactElement, useState } from "react";
import { Button, StyleSheet, TextInput, View, Alert,Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;
type Props = { navigation: LoginScreenNavigationProp };

export const UserLogin: FC<Props> = ({ navigation }): ReactElement => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Username and password cannot be empty.");
      return;
    }

    try {
      const storedUser = await AsyncStorage.getItem("user");
      if (!storedUser) {
        Alert.alert("Error", "No registered user found. Please sign up first.");
        return;
      }

      const { username: storedUsername, password: storedPassword } = JSON.parse(storedUser);
      if (username === storedUsername && password === storedPassword) {
        Alert.alert("Success", "Login successful!");
        navigation.navigate("Home");
      } else {
        Alert.alert("Error", "Invalid credentials.");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong during login.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={username}
        placeholder="Username"
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <View style={styles.centerText}>
            <Text>Don't have a account Register!!!</Text>
            </View>
      <Button title="Register" onPress={() => navigation.navigate("Register")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  centerText: {
    alignItems: "center", 
    justifyContent: "center",
    marginVertical: 10,
  }
});
