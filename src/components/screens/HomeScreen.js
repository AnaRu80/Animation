import React from 'react';
import { View } from 'react-native';
import NavigationFlatList from './NavigationFlatList';

const HomeScreen = ({ navigation }) => {
  const screens = [
    { id: 1, title: 'Screen 1' },
    { id: 2, title: 'Screen 2' },
    { id: 3, title: 'Screen 3' },
  ];

  const onPressItem = item => {
    // Handle navigation to the selected screen here
    console.log('Selected screen:', item.title);
  };

  return (
    <View>
      <NavigationFlatList screens={screens} onPressItem={onPressItem} />
    </View>
  );
};

export default HomeScreen;
