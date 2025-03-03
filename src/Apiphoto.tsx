import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Apiphoto = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const fetchImages = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10");
      const data: Photo[] = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Image Gallery</Text>
      {photos.map((photo) => (
        <View key={photo.id} style={styles.card}>
          <Image source={{ uri: photo.thumbnailUrl }} style={styles.image} />
          <Text style={styles.title}>{photo.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  card: {
    marginBottom: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    resizeMode: "contain",  
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Apiphoto;
