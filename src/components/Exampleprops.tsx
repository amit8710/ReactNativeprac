import React from "react";
import { View, Text } from "react-native";

// Props Interface
interface GreetingProps {
  name: string;
}
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <View>
      <Text>Hello, {name}!</Text>
    </View>
  );
};
// Parent Component
const Exampleprops: React.FC = () => {
  return <Greeting name="Amit" />;
};

export default Exampleprops;
