/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, Button} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Screen1 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleNavigateScreen2 = () => {
    navigation.navigate('Screen2');
  };

  return (
    <ScrollView>
      <Button title="Navigate screen 2" onPress={handleNavigateScreen2} />
      <View style={{height: 15}} />
      <Button title="Get List Image" />
      <View style={{height: 15}} />
    </ScrollView>
  );
};
export default Screen1;
