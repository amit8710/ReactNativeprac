
import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Listapi = () => {
  const [data, setData] = useState<Post[]>([]);

  const getAPIData = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const response = await fetch(url);
      const result: Post[] = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 30, marginBottom: 10 }}>List API Call</Text>
      {data.length > 0 ? (
        data.map((item) => (
          <View key={item.id} style={{ padding: 10, borderBottomColor: "#ccc", borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 20 }}>ID: {item.userId}</Text>
            <Text style={{ fontSize: 20 }}>ID: {item.id}</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.title}</Text>
            <Text style={{ fontSize: 16 }}>{item.body}</Text>
            
            
          </View>
        ))
      ) : (
        <Text style={{ fontSize: 20 }}>Loading...</Text>
      )}
    </ScrollView>
  );
};

export default Listapi;
