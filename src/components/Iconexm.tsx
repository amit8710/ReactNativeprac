import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const socialLinks = [
  { name: "facebook", url: "https://www.facebook.com", color: "#1877F2" },
  { name: "twitter", url: "https://www.twitter.com", color: "#1DA1F2" },
  { name: "instagram", url: "https://www.instagram.com", color: "#E4405F" },
  { name: "linkedin", url: "https://www.linkedin.com", color: "#0077B5" },
  { name: "github", url: "https://www.github.com", color: "#333" }
];

const Iconexm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Follow Us</Text>
      <View style={styles.iconContainer}>
        {socialLinks.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => Linking.openURL(item.url)}>
            <FontAwesome name={item.name} size={40} color={item.color} style={styles.icon} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Iconexm;

const styles = StyleSheet.create({
  container: {       
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
});
