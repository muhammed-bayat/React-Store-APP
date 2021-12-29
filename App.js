import React from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native';
import ProductCard from './src/components/ProductCard';
import products_data from './data.json';

const App = () => {
  const renderProduct = ({item}) => <ProductCard product={item} />;
  return (
    <SafeAreaView>
      <Text style={styles.head}>PATİKASTORE</Text>
      <TextInput
        inlineImageLeft="search_icon"
        style={styles.input}
        placeholder="Ara..."
      />
      <FlatList
        columnWrapperStyle={styles.tagView}
        numColumns={2}
        data={products_data}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  tagView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 50,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#eceff1',
  },
  head: {
    fontWeight: 'bold',
    fontSize: 30,
     
    marginTop: 60,
    marginLeft: 10,
    marginBottom: 10,
  
 
   
    color: 'purple',
  },
});

export default App;