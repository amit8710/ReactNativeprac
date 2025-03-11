// Saving and retriving the data using Asyncstorage
import React,{useState, useEffect} from "react";
import { View,Text,TextInput,Button,Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AsyncStorageExample = () => {
    const [name, setName] = useState<string>("");
    const [storedname, setStoredName] = useState< string | null>(null);

    const SaveData = async () => {
        try{
            await AsyncStorage.setItem("user_name", name);
            Alert.alert("Data saved!");
        } catch(error){
            console.error("Error saving data",error);
        }
    };

    const GetData = async () => {
        try{
            const value = await AsyncStorage.getItem("user_name");
            if(value !== null){
                setStoredName(value);
            } 
        }catch(error){
            console.error("Error geting data",error);
        };
    }
    useEffect(() => {
        GetData();
      }, []);
      return(
        <View>
            <Text>Enter Name:</Text>
            <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Type here......"
            style={{borderWidth:1,marginBottom:10,padding:25}} />
            <Button title="Save Name" onPress={SaveData} />
            <View style={{ marginVertical: 10 }} />  
            <Button title="Retrive Name" onPress={GetData} />
            <View style={{ marginVertical: 10 }} />  
            <Text>Stored Name: {storedname}</Text>
        </View>
      )
    
}
export default AsyncStorageExample;