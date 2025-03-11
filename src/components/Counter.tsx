import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Press" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Counter;
