import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

const Upload: React.FC = () => {
    const [file, setFile] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== "granted") {
            Alert.alert("Permission Denied", "Sorry, we need camera roll permissions to make this work!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled && result.assets && result.assets.length > 0) {
            setFile(result.assets[0].uri); 
            setError(null); 
        } else {
            setError("Image selection was canceled or failed."); 
        }
        
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Upload Image:</Text>

            <TouchableOpacity style={styles.button} onPress={pickImage}>
                <Text style={styles.buttonText}>Choose Image</Text>
            </TouchableOpacity>

            {file ? (
                <View style={styles.imageContainer}>
                    <Image source={{ uri: file }} style={styles.image} />
                </View>
            ) : (
                error && <Text style={styles.errorText}>{error}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
    },
    imageContainer: {
        marginTop: 20,
        width: 200,
        height: 200,
        borderRadius: 10,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    errorText: {
        color: "red",
        marginTop: 10,
    },
});

export default Upload;