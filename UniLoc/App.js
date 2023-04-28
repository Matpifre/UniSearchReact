import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import axios from 'axios';

const App = () => {
  const [country, setCountry] = useState('');
  const [name, setName] = useState('');
  const [universities, setUniversities] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://universities.hipolabs.com/search', {
        params: {
          name: name,
          country: country,
        },
      });
      setUniversities(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.country}</Text>
    </View>
  );

  return (
    <View>
      <TextInput
        input style="margin-top: 50px" 
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <TextInput
        placeholder="University Name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={universities}
        renderItem={renderItem}
        keyExtractor={(item) => item.alpha_two_code + item.name}
      />
    </View>
  );
};

export default App;
