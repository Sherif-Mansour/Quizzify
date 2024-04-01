import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import dailyTriviaData from '../data/dailyTriviaData';
import {useFocusEffect} from '@react-navigation/native';
import quizData from '../data/quizData'; // Import quizData
import {RadioButton} from 'react-native-paper'; // Import RadioButton component from react-native-paper

const HomeScreen = ({navigation}) => {
  const [questionState, setQuestionState] = useState('unsubmitted');
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  // Reset the current question when the screen regains focus
  useFocusEffect(
    React.useCallback(() => {
      resetCurrentQuestion();
      setQuestionState('unsubmitted');
      setSelectedOption(null);
    }, []),
  );

  // Function to select a random question from the dailyTriviaData array
  const selectRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * dailyTriviaData.length);
    return dailyTriviaData[randomIndex];
  };

  // Function to reset the current question
  const resetCurrentQuestion = () => {
    setCurrentQuestion(selectRandomQuestion());
  };

  useEffect(() => {
    resetCurrentQuestion(); // Initial random question selection
  }, []);

  const handlePlayPress = () => {
    // Select a random category from quizData
    const randomCategoryIndex = Math.floor(Math.random() * quizData.length);
    const randomCategory = quizData[randomCategoryIndex].category;
    // Navigate to QuizScreen with the randomly selected category
    navigation.navigate('Quiz', {category: randomCategory});
  };

  const handleExplorePress = () => {
    navigation.navigate('Category');
  };

  const handleSubmitAnswer = optionIndex => {
    setSelectedOption(optionIndex);
    setQuestionState('submitted');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Quizzify!</Text>
      <Text style={styles.description}>
        Quizzify is a fun way to test your knowledge across various categories.
        Ready to challenge yourself?
      </Text>

      <View style={styles.triviaContainer}>
        <Text style={styles.triviaSubtitle}>Trivia of the Day!</Text>
        {currentQuestion && (
          <View style={styles.questionWrapper}>
            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>
                {currentQuestion.question}
              </Text>
              {currentQuestion.options.map((option, optionIndex) => {
                const selected = selectedOption === optionIndex;
                const isCorrect = option === currentQuestion.correct;
                return (
                  <TouchableOpacity
                    key={optionIndex}
                    style={[
                      styles.optionContainer,
                      questionState == 'submitted' &&
                      selectedOption === optionIndex &&
                      isCorrect
                        ? styles.correctOptionContainer
                        : questionState == 'submitted' &&
                          selectedOption === optionIndex
                        ? styles.incorrectOptionContainer
                        : questionState == 'submitted' && isCorrect
                        ? styles.showCorrectAnswerContainer
                        : null,
                    ]}
                    onPress={() => handleSubmitAnswer(optionIndex)}
                    disabled={questionState == 'submitted'}>
                    <RadioButton
                      value={optionIndex}
                      status={selected ? 'checked' : 'unchecked'}
                      onPress={() => handleSubmitAnswer(optionIndex)}
                      disabled={questionState == 'submitted'}
                      color="#FFFFFF"
                    />
                    <Text style={styles.optionText}>{option}</Text>
                  </TouchableOpacity>
                );
              })}
              {questionState == 'submitted' &&
                (selectedOption ==
                currentQuestion.options.indexOf(currentQuestion.correct) ? (
                  <Text style={styles.answerText}>Correct</Text>
                ) : (
                  <Text style={styles.answerText}>Incorrect</Text>
                ))}
            </View>
          </View>
        )}
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableHighlight
          style={styles.playButton}
          onPress={handlePlayPress}
          underlayColor="transparent">
          <Text style={styles.buttonText}>Play</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.exploreButton}
          onPress={handleExplorePress}
          underlayColor="transparent">
          <Text style={styles.buttonText}>Explore</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#0569B0',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  triviaSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  triviaContainer: {
    backgroundColor: '#47B2FF',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '95%',
    alignItems: 'center',
  },
  questionContainer: {
    marginBottom: 5,
    alignItems: 'flex-start',
  },
  questionText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'left',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 5,
    padding: 3,
    width: '100%',
  },
  optionText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 10,
    flex: 1,
  },
  correctOptionContainer: {
    backgroundColor: '#4CAF50',
  },
  incorrectOptionContainer: {
    backgroundColor: '#DC143C',
  },
  showCorrectAnswerContainer: {
    backgroundColor: '#FF5722',
  },
  answerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  playButton: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 29,
    margin: 10,
    flex: 1,
  },
  exploreButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 29,
    margin: 10,
    flex: 1,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default HomeScreen;
