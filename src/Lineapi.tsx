import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Lineapi = () => {
  const [data, setData] = useState<Post | null>(null); 

  const getAPIData = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts/1";
      const response = await fetch(url);
      const result: Post = await response.json(); 
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 30 }}>API Call</Text>
      {data ? (
        <View>
          <Text style={{ fontSize: 20 }}>ID: {data.id}</Text>
          <Text style={{ fontSize: 20 }}>User ID: {data.userId}</Text>
          <Text style={{ fontSize: 20 }}>Title: {data.title}</Text>
          <Text style={{ fontSize: 20 }}>Body: {data.body}</Text>
        </View>
      ) : (
        <Text style={{ fontSize: 20 }}>Loading...</Text>
      )}
    </View>
  );
};

export default Lineapi;
