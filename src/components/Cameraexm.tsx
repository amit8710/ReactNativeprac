import React, { useState } from "react";
import { View, Button, Image } from "react-native";
import { launchCamera, CameraOptions, ImagePickerResponse } from "react-native-image-picker";

const CameraComponent = () => {
  const [photo, setPhoto] = useState<string | null>(null);

  const openCamera = () => {
    const options: CameraOptions = {
      mediaType: "photo",
      cameraType: "back",
      saveToPhotos: true,
    };

    launchCamera(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log("User cancelled camera");
      } else if (response.errorMessage) {
        console.log("Camera Error: ", response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setPhoto(response.assets[0].uri || null); 
      }
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Open Camera" onPress={openCamera} />
      {photo && <Image source={{ uri: photo }} style={{ width: 200, height: 200, marginTop: 10 }} />}
    </View>
  );
};

export default CameraComponent;
