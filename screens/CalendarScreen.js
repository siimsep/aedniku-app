import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const CalendarScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Kalendri vaade</Text>
      <Button title="Click here" onPress={() => alert('Button clicked')} />
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '8fcbbc',
  },
});
