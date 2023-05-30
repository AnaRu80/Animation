import { Entypo, Feather } from '@expo/vector-icons';
import { faker } from '@faker-js/faker';
import React, { useState, useRef, useEffect } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MotiView } from 'moti'

const { width, height } = Dimensions.get('screen');

faker.seed(10);

const data = [...Array(20).keys()].map(() => ({
  key: faker.datatype.uuid(),
  job: faker.animal.crocodilia(),
}));

const _colors = {
  active: `#FCD259ff`,
  inactive: `#FCD25900`,
};
const _spacing = 10;

export default function UberEats() {

  const ref = useRef(null)
  const [index, setIndex] = useState(0)
  const [viewPosition, setViewPosition] = useState(0)
  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      viewOffset: viewPosition === 0.5 || viewPosition === 1 ? 0 : _spacing,
      viewPosition
    })
  }, [index, viewPosition])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        ref={ref}
        initialScrollIndex={index}
        style={{ flexGrow: 0 }}
        data={data}
        keyExtractor={item => item.key}
        contentContainerStyle={{ paddingLeft: _spacing }}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item, index: fIndex }) => {
          return (
            <TouchableOpacity onPress={() => {
              setIndex(fIndex)

            }}>
              <MotiView
                animate={{
                  backgroundColor: fIndex === index ? "red" : _colors.inactive,
                  opacity: fIndex === index ? 1 : 0.3
                }}
                transition={{
                  duration: 500
                }}
                style={styles.MotiViewContainer}>
                <Text style={{ color: '#36303F', fontWeight: '700' }}>
                  {item.job}
                </Text>
              </MotiView>
            </TouchableOpacity>
          );
        }}
      />
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: _spacing * 10,
        }}>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              color: '#36303F',
              fontWeight: '700',
              marginBottom: _spacing,
            }}>
            Scroll position
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: width / 2,
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => {
              setViewPosition(0)

            }}>
              <View
                style={IconContainer}>
                <Text>left</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {

              setViewPosition(0.5)

            }}>
              <View
                style={IconContainer}>
                <Text>middle</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setViewPosition(1)

            }}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                }}>
                <Text>right</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{ color: '#36303F', fontWeight: '700', marginBottom: 10 }}>
            Navigation
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: width / 2,
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => {
              if (index === 0)
                return
              setIndex(index - 1)
            }}>
              <View
                style={IconContainer}>
                <Text>left</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              if (index === data.length - 1)
                return
              setIndex(index + 1)
            }}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                }}>
                <Text>right</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet({
  MotiViewContainer: {
    marginRight: _spacing,
    padding: _spacing,
    borderWidth: 2,
    borderColor: _colors.active,
    borderRadius: 12,
    backgroundColor: fIndex === index ? _colors.active : _colors.inactive,
  },
  IconContainer: {
    padding: _spacing,
    backgroundColor: '#FCD259',
    borderRadius: _spacing,
    marginRight: _spacing,
  }
})
