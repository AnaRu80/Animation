import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const NavigationFlatList = ({ screens, onPressItem }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => onPressItem(item)}>
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ backgroundColor: "red", width: 1100, height: 100 }}>
      <FlatList
        data={screens}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  item: {
    paddingVertical: 10,
  },
  itemText: {
    fontSize: 18,
    color: 'black',
  },
});

export default NavigationFlatList;
