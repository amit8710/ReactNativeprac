import React,{useEffect, useState } from "react";
import { StyleSheet,View,Text, FlatList,ActivityIndicator } from "react-native";
import axios from "axios";

const Firstaxos = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // Fetch
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
          setData(response.data); 
        } catch (err) {
          setError(err.message); 
        } finally {
          setLoading(false); 
        }
      };
      fetchData();
    }, []);
    if (loading) {
      return <ActivityIndicator size="large" color="blue"/>
    }
    if(error){
      return
    }
  if (error) {
    return <Text style={styles.error}>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>API Data</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  heading: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  title: { fontSize: 18, fontWeight: "bold" },
  error: { color: "red", textAlign: "center", fontSize: 18, marginTop: 20 },
});

export default Firstaxos;
