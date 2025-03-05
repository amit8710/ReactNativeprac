import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

interface Item {
  id: string;
  title: string;
}

const Search = () => {
  const data: Item[] = [
    { id: "1", title: "C" },
    { id: "2", title: "C++" },
    { id: "3", title: "Java" },
    { id: "4", title: "Python" },
    { id: "5", title: "SQL" },
    { id: "6", title: "MongoDb" },
    { id: "7", title: "JavaScript" },
    { id: "8", title: "React" },
    { id: "9", title: "React.js" },
    { id: "10", title: "React Native" },
    { id: "11", title: "QA" },
  ];

  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // Strictly typed handler
  const updateSearch = (searchText: string) => {
    setSearch(searchText);
    const filtered = data.filter(item =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <SearchBar
        placeholder="Search"
        onChangeText={updateSearch as (text: string) => void} // Type assertion
        value={search}
        platform="default"
        lightTheme
        // Required props
        containerStyle={{}}
        inputContainerStyle={{}}
        // Optional but recommended
        round
        searchIcon={{ size: 24 }}
        clearIcon={{ size: 24 }}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default Search;