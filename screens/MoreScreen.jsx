import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>More Screen</Text>
      <View style={[styles.infoContainer, styles.sectionBackground]}>
        <Text style={styles.infoTitle}>About Us</Text>
        <Text style={styles.infoText}>
          Welcome to Quizzify – the ultimate destination for trivia enthusiasts!
          Embark on a thrilling journey of knowledge and entertainment with our
          diverse range of quizzes covering topics from history and geography to
          music and sports. With Quizzify, learning is fun and engaging, making
          it the perfect companion for both casual gamers and avid learners. Get
          ready to quiz, learn, and repeat with Quizzify – where knowledge meets
          excitement!
        </Text>
      </View>
      <View style={[styles.infoContainer, styles.sectionBackground]}>
        <Text style={styles.infoTitle}>Version</Text>
        <Text style={styles.infoText}>1.0.0</Text>
      </View>
      <View style={[styles.infoContainer, styles.sectionBackground]}>
        <Text style={styles.infoTitle}>Contact</Text>
        <Text style={styles.infoText}>Email: smart@mergelabs.com</Text>
        <Text style={styles.infoText}>Phone: +403-284-7248</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0569B0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  infoContainer: {
    marginBottom: 20,
    width: '90%',
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  sectionBackground: {
    backgroundColor: '#47B2FF',
    borderRadius: 10,
    padding: 10,
  },
});

export default MoreScreen;
