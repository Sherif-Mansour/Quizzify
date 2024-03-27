import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Question from '../components/Question';

const logoImage = require('../images/logo-no-background.png');
const homeIcon = require('../images/icons8-home-50.png');
const categoryIcon = require('../images/CategoryIcon.png');
const quizIcon = require('../images/QuizIcon.png');
const moreIcon = require('../images/MoreIcon.png');

export default function HomeScreen() {
  const [questionState, setQuestionState] = React.useState('unanswered');

  const handleQuestionSubmit = () => {
    setQuestionState('submitted');
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.text}>
          "Welcome to Quizzifiy! - the ultimate destination for trivia
          enthusiasts! Embark on a thrilling journey of knowledge and
          entertainment with our diverse range of quizzes covering a wide array
          of topics. From history and geography to music and sports. With
          Quizzifiy, learning is fun and engaging, making it the perfect
          companion for both casual gamers and avid learners. Get ready to quiz,
          learn and repeat with Quizzifiy! - where knowledge meets excitement!"
        </Text>

        <View style={styles.paragraphContainer}>
          <Text style={styles.triviaHeaderText}>Trivia of the day:</Text>
          <Question
            question={
              'Which planet in our solar system is known as the "Red Planet"?'
            }
            options={['Mercury', 'Saturn', 'Venus', 'Mars']}
            state={questionState}
            correctAnswer={'Mars'}
          />
          <Text
            style={styles.buttonTextSubmit}
            onPress={() => handleQuestionSubmit()}>
            Submit
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonTextPlay}>Play</Text>
          <Text style={styles.buttonTextExplore}>Explore</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0569b0',
  },

  headerBackground: {
    backgroundColor: '#0096FF',
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logo: {
    width: -100,
    height: 100,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    flex: 1,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 5,
    textAlign: 'center',
  },

  paragraphContainer: {
    marginVertical: 5,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 3,
    paddingBottom: 10,
    backgroundColor: '#0096FF',
    alignItems: 'center',

    marginTop: 10,
    marginBottom: 10,
  },
  triviaHeaderText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 10,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  pText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  buttonTextSubmit: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 29,
    margin: 10,
    textAlign: 'center',
    width: 100,
    borderColor: 'black',
  },
  buttonTextPlay: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 29,
    margin: 10,
    textAlign: 'center',
    width: 100,
    borderColor: 'black',
  },
  buttonTextExplore: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 29,
    margin: 10,
    textAlign: 'center',
    width: 100,
    borderColor: 'black',
  },
});
