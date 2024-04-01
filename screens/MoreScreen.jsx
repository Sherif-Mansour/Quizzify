import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>More Screen</Text>
      <Text style={styles.text}>Placeholder content for the More screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MoreScreen;
