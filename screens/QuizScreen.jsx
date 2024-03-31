import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {RadioButton} from 'react-native-paper'; // Import RadioButton component from react-native-paper
import quizData from '../data/quizData';

const QuizScreen = ({route, navigation}) => {
  const {category} = route.params;
  const questions = quizData.find(item => item.category === category).questions;
  const initialSelectedOptions = new Array(questions.length).fill(-1);
  const [selectedOptions, setSelectedOptions] = useState(
    initialSelectedOptions,
  );
  const [submitted, setSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [skippedCount, setSkippedCount] = useState(0);
  const scrollViewRef = useRef(null);

  const handleOptionSelect = (index, optionIndex) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[index] =
      updatedOptions[index] === optionIndex ? -1 : optionIndex; // Toggle selection based on current selection state
    setSelectedOptions(updatedOptions);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      let correct = 0;
      let incorrect = 0;
      let skipped = 0;
      selectedOptions.forEach((selectedOption, index) => {
        if (
          selectedOption ===
          questions[index].options.indexOf(questions[index].correct)
        ) {
          correct++; // Increment correct count if the selected option matches the correct index
        } else if (selectedOption === -1) {
          skipped++; // Increment skipped count if the selected option is -1 (unanswered)
        } else {
          incorrect++; // Increment incorrect count for all other cases
        }
      });
      setCorrectCount(correct);
      setIncorrectCount(incorrect);
      setSkippedCount(skipped);
    }
  }, [submitted]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setSelectedOptions(initialSelectedOptions);
      setSubmitted(false);
      setCorrectCount(0);
      setIncorrectCount(0);
      setSkippedCount(0);
      scrollViewRef.current.scrollTo({y: 0, animated: true}); // Scroll to top
    });

    return unsubscribe;
  }, [navigation]);

  const handlePlayPress = () => {
    const randomCategoryIndex = Math.floor(Math.random() * quizData.length);
    const randomCategory = quizData[randomCategoryIndex].category;
    setSelectedOptions(initialSelectedOptions);
    setSubmitted(false);
    setCorrectCount(0);
    setIncorrectCount(0);
    setSkippedCount(0);
    navigation.navigate('Quiz', {category: randomCategory});
  };

  const handleExplorePress = () => {
    navigation.navigate('Category');
  };

  return (
    <ScrollView contentContainerStyle={styles.container} ref={scrollViewRef}>
      <Text style={styles.category}>{category} Quiz</Text>
      {questions.map((question, index) => (
        <View key={index} style={styles.questionWrapper}>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{question.question}</Text>
            {question.options.map((option, optionIndex) => {
              const selected = selectedOptions[index] === optionIndex;
              const isCorrect = option === question.correct;
              const isIncorrect = selected && !isCorrect;
              const isUnanswered = !selected && !submitted;
              const isSkipped =
                !selected && submitted && option === question.correct;
              return (
                <TouchableOpacity
                  key={optionIndex}
                  style={[
                    styles.optionContainer,
                    submitted &&
                    selectedOptions[index] === optionIndex &&
                    isCorrect
                      ? styles.correctOptionContainer
                      : submitted &&
                        selectedOptions[index] === optionIndex &&
                        isIncorrect
                      ? styles.incorrectOptionContainer
                      : isUnanswered
                      ? styles.unansweredOptionContainer
                      : isSkipped
                      ? styles.skippedOptionContainer
                      : null,
                  ]}
                  onPress={() => handleOptionSelect(index, optionIndex)}
                  disabled={submitted}>
                  <RadioButton
                    value={optionIndex}
                    status={selected ? 'checked' : 'unchecked'}
                    onPress={() => handleOptionSelect(index, optionIndex)}
                    disabled={submitted}
                    color="#FFFFFF"
                  />
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ))}
      <TouchableOpacity
        style={[styles.submitButton, submitted ? styles.disabledButton : null]}
        onPress={handleSubmit}
        disabled={submitted}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      {submitted && (
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>
            Your performance on this {category} quiz was:
          </Text>
          <Text style={styles.summaryText}>
            Correct Answers: {correctCount}
          </Text>
          <Text style={styles.summaryText}>
            Incorrect Answers: {incorrectCount}
          </Text>
          <Text style={styles.summaryText}>
            Skipped Questions: {skippedCount}
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.playButton]}
              onPress={handlePlayPress}>
              <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.exploreButton]}
              onPress={handleExplorePress}>
              <Text style={styles.buttonText}>Explore</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#0569B0',
    padding: 20,
  },
  category: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  questionWrapper: {
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
    marginBottom: 20,
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
    padding: 10,
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
  unansweredOptionContainer: {},
  skippedOptionContainer: {
    backgroundColor: '#FF5722',
  },
  submitButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#999999',
  },
  summaryContainer: {
    backgroundColor: '#47B2FF',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '95%',
    alignItems: 'center',
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 29,
    margin: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  playButton: {
    backgroundColor: 'orange',
  },
  exploreButton: {
    backgroundColor: 'green',
  },
});

export default QuizScreen;
