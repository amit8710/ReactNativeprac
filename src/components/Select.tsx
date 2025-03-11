import React, { useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { launchImageLibrary, ImagePickerResponse, Asset } from "react-native-image-picker";

const Select = () => {
  const [image, setImage] = useState<{ uri: string } | null>(null);

  const handleSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        quality: 1,
        includeBase64: true,
      },
      (response: ImagePickerResponse) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.errorCode) {
          console.log("Error: ", response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const selectedImage = response.assets[0];
          if (selectedImage.uri) {
            setImage({ uri: selectedImage.uri });
          }
        }
      }
    );
  };
  const handleDeleteImage = () => {
    setImage(null); 
  };
  

  return (
    <View style={styles.container}>
      <Button title="Pick an Image" onPress={handleSelectImage} />

      {image && (
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
          <Button title="Delete Image" onPress={handleDeleteImage} color="red" />
        </View>
      )}

      <Text style={styles.text}>
        {image ? "Image Selected!" : "No Image Selected"}
      </Text>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  imageContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
});