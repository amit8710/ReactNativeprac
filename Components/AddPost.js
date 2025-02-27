import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';

const AddPost = () => {
  const navigation = useNavigation();
  const [selectedFile, setSelectedFile] = useState(null);

  const pickFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles], 
      });

      setSelectedFile(res[0]); 
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled file picker');
      } else {
        console.error(err);
      }
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerButtonContainer}>
          <Button title="Back" onPress={() => navigation.navigate('Home')} />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a Post</Text>

      <TextInput
        style={styles.input}
        placeholder="Write something..."
        multiline={true}
        numberOfLines={10}
      />

      <TouchableOpacity style={styles.fileButton} onPress={pickFile}>
        <Text style={styles.fileButtonText}>Select File</Text>
      </TouchableOpacity>

      {selectedFile && (
        <Text style={styles.selectedFileText}>
          Selected File: {selectedFile.name}
        </Text>
      )}

      <Button title="Done" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
  },
  headerButtonContainer: {
    marginRight: 10,
  },
  input: {
    height: 150,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  fileButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  fileButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  selectedFileText: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
