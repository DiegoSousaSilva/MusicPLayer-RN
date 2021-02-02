import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App () {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
      <Text style={{fontSize: 40, textAlign:'center'}}>Wellcome to{'\n'}MusicPlayer {'\n'}By: Diego Dev</Text>
      <Icon name='cake' size={170} />
    </View>
  )
};

const styles = StyleSheet.create({

});
