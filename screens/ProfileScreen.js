import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Profiili vaade</Text>
      <Button title="Click here" onPress={() => alert('Button clicked')} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '8fcbbc',
  },
});
