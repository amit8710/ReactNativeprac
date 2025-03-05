import React, { FC, ReactElement, useState } from "react";
import { Button, StyleSheet, TextInput, View, Alert, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, "Register">;
type Props = { navigation: RegisterScreenNavigationProp };

export const UserRegister: FC<Props> = ({ navigation }): ReactElement => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Function to validate email format
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = async () => {
    if (!username || !password || !email) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    try {
      await AsyncStorage.setItem("user", JSON.stringify({ username, password, email }));
      Alert.alert("Success", `A verification email has been sent to ${email}. Please verify before logging in.`);

      navigation.navigate("Login"); 
    } catch (error) {
      Alert.alert("Error", "Something went wrong during registration.");
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
        value={email}
        placeholder="Email (abc@gmail.com)"
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />
      
      <Button title="Sign Up" onPress={handleSignUp} />
      <View style={styles.centerText}>
        <Text>Already have an account?</Text>
      </View>
      <Button title="Go to Login" onPress={() => navigation.navigate("Login")}/>
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
