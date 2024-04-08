import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {
  useNavigation,
  useIsFocused,
  useFocusEffect,
} from '@react-navigation/native';
import {RadioButton} from 'react-native-paper';
import quizData from '../data/quizData';
import ScrollDownIcon from '../assets/images/ScrollDownIcon.png';
import AnimalsIcon from '../assets/images/AnimalsIcon.png';
import ArtIcon from '../assets/images/ArtIcon.png';
import GeographyIcon from '../assets/images/GeographyIcon.png';
import GrammarIcon from '../assets/images/GrammarIcon.png';
import HistoryIcon from '../assets/images/HistoryIcon.png';
import MathsIcon from '../assets/images/MathsIcon.png';
import MoviesIcon from '../assets/images/MoviesIcon.png';
import MusicIcon from '../assets/images/MusicIcon.png';
import ScienceIcon from '../assets/images/ScienceIcon.png';
import SportsIcon from '../assets/images/SportsIcon.png';

const QuizScreen = ({route}) => {
  const scrollViewRef = useRef(null);
  const {category} = route.params;
  const questions = quizData.find(item => item.category === category).questions;
  const initialSelectedOptions = new Array(questions.length).fill(-1);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [state, setState] = useState('no quiz');
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [skippedCount, setSkippedCount] = useState(0);
  const [showScrollDownIcon, setShowScrollDownIcon] = useState(false);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('beforeRemove', e => {
        if (state !== 'no quiz') {
          e.preventDefault();
          Alert.alert(
            'Are you sure you want to leave?',
            'All your progress will be lost.',
            [
              {text: 'Stay', style: 'cancel', onPress: () => {}},
              {
                text: 'Leave',
                style: 'destructive',
                onPress: () => navigation.dispatch(e.data.action),
              },
            ],
          );
        }
      });

      return unsubscribe;
    }, [navigation, state]),
  );

  const handleOptionSelect = (index, optionIndex) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[index] =
      updatedOptions[index] === optionIndex ? -1 : optionIndex;
    setSelectedOptions(updatedOptions);
  };

  const handleSubmit = () => {
    setState('submitted');
    let correct = 0;
    let incorrect = 0;
    let skipped = 0;
    selectedOptions.forEach((selectedOption, index) => {
      if (
        selectedOption ===
        questions[index].options.indexOf(questions[index].correct)
      ) {
        correct++;
      } else if (selectedOption === -1) {
        skipped++;
      } else {
        incorrect++;
      }
    });
    setCorrectCount(correct);
    setIncorrectCount(incorrect);
    setSkippedCount(skipped);
  };

  const onScroll = event => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    const isScrollingDown =
      layoutMeasurement.height + contentOffset.y < contentSize.height;
    setShowScrollDownIcon(isScrollingDown);
  };

  useEffect(() => {
    if (scrollViewRef.current && scrollViewRef.current.addListener) {
      scrollViewRef.current.addListener('scroll', onScroll);
      return () => {
        if (scrollViewRef.current && scrollViewRef.current.removeListener) {
          scrollViewRef.current.removeListener('scroll', onScroll);
        }
      };
    }
  }, []);

  useEffect(() => {
    if (category != null) {
      setState('started');
    }
  }, [category]);

  const handleReviewPress = () => {
    setState('review');
    scrollViewRef.current?.scrollTo({y: 0, animated: true});
  };

  const handlePlayPress = () => {
    if (state !== 'no quiz') {
      Alert.alert(
        'Are you sure you want to leave?',
        'All your progress will be lost.',
        [
          {text: 'Stay', style: 'cancel', onPress: () => {}},
          {
            text: 'Leave',
            style: 'destructive',
            onPress: () => {
              const randomCategoryIndex = Math.floor(
                Math.random() * quizData.length,
              );
              const randomCategory = quizData[randomCategoryIndex].category;
              setSelectedOptions(initialSelectedOptions);
              setState('started');
              setCorrectCount(0);
              setIncorrectCount(0);
              setSkippedCount(0);
              navigation.navigate('Quiz', {category: randomCategory});
              if (scrollViewRef.current) {
                scrollViewRef.current.scrollTo({y: 0, animated: true});
              }
            },
          },
        ],
      );
    } else {
      const randomCategoryIndex = Math.floor(Math.random() * quizData.length);
      const randomCategory = quizData[randomCategoryIndex].category;
      setSelectedOptions(initialSelectedOptions);
      setState('started');
      setCorrectCount(0);
      setIncorrectCount(0);
      setSkippedCount(0);
      navigation.navigate('Quiz', {category: randomCategory});
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({y: 0, animated: true});
      }
    }
  };

  const handleExplorePress = () => {
    if (state !== 'no quiz') {
      Alert.alert(
        'Are you sure you want to leave?',
        'All your progress will be lost.',
        [
          {text: 'Stay', style: 'cancel', onPress: () => {}},
          {
            text: 'Leave',
            style: 'destructive',
            onPress: () => navigation.navigate('Category'),
          },
        ],
      );
    } else {
      navigation.navigate('Category');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContentContainer}
        onScroll={onScroll}
        scrollEventThrottle={16}
        ref={scrollViewRef}>
        {state == 'no quiz' && (
          <Text style={styles.category}>No quiz selected</Text>
        )}
        {state != 'no quiz' && (
          <View style={styles.header}>
            <Image source={getCategoryIcon(category)} style={styles.icon} />
            <Text style={styles.category}>{category} Quiz</Text>
          </View>
        )}
        {(state == 'started' || state == 'review') &&
          questions.map((question, index) => (
            <View key={index} style={styles.questionWrapper}>
              <View style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.question}</Text>
                {question.options.map((option, optionIndex) => {
                  const selected = selectedOptions[index] === optionIndex;
                  const isCorrect = option === question.correct;
                  const isIncorrect = selected && !isCorrect;
                  const isUnanswered = !selected && !(state == 'review');
                  const isSkipped =
                    !selected &&
                    state == 'review' &&
                    option === question.correct;
                  return (
                    <TouchableOpacity
                      key={optionIndex}
                      style={[
                        styles.optionContainer,
                        state == 'review' &&
                        selectedOptions[index] === optionIndex &&
                        isCorrect
                          ? styles.correctOptionContainer
                          : state == 'review' &&
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
                      disabled={state == 'review'}>
                      <RadioButton
                        value={optionIndex}
                        status={selected ? 'checked' : 'unchecked'}
                        onPress={() => handleOptionSelect(index, optionIndex)}
                        disabled={state == 'review'}
                        color="#FFFFFF"
                      />
                      <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          ))}
        {state == 'started' && (
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        )}
        {(state == 'submitted' || state == 'review') && (
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
            {state == 'submitted' && (
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.reviewButton]}
                  onPress={handleReviewPress}>
                  <Text style={styles.buttonText}>Review</Text>
                </TouchableOpacity>
              </View>
            )}
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
      <View
        style={[
          styles.scrollDownContainer,
          {display: showScrollDownIcon ? 'flex' : 'none'},
        ]}>
        <Image source={ScrollDownIcon} style={styles.scrollDownIcon} />
      </View>
    </View>
  );
};

const getCategoryIcon = category => {
  switch (category) {
    case 'Animals':
      return AnimalsIcon;
    case 'Art':
      return ArtIcon;
    case 'Geography':
      return GeographyIcon;
    case 'Grammar':
      return GrammarIcon;
    case 'History':
      return HistoryIcon;
    case 'Maths':
      return MathsIcon;
    case 'Movies':
      return MoviesIcon;
    case 'Music':
      return MusicIcon;
    case 'Science':
      return ScienceIcon;
    case 'Sports':
      return SportsIcon;
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#0569B0',
    padding: 20,
    position: 'relative',
  },
  scrollContentContainer: {
    width: '100%',
  },
  scrollDownContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  scrollDownIcon: {
    width: 40,
    height: 40,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 70,
    height: 70,
    marginBottom: 20,
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
  unansweredOptionContainer: {},
  skippedOptionContainer: {
    backgroundColor: '#FF5722',
  },
  submitButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 29,
    marginTop: 20,
    alignSelf: 'center',
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
  reviewButton: {
    backgroundColor: 'red',
  },
  playButton: {
    backgroundColor: 'orange',
  },
  exploreButton: {
    backgroundColor: 'green',
  },
});

export default QuizScreen;
