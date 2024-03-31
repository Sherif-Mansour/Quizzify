import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';

const Question = ({question, options, correctAnswer}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Use useFocusEffect to reset the state when the screen gains focus
  useFocusEffect(
    React.useCallback(() => {
      setSelectedOption(null);
      setSubmitted(false);
    }, []),
  );

  useEffect(() => {
    if (selectedOption !== null) {
      // Auto-submit the answer after an option is selected
      setSubmitted(true);
    }
  }, [selectedOption]);

  return (
    <View>
      <Text style={styles.question}>{question}</Text>
      {options.map((option, index) => (
        <View key={option} style={styles.optionContainer}>
          <RadioButton
            value={index}
            status={selectedOption === index ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOption(index)}
            disabled={submitted}
          />
          <Text
            style={[
              styles.optionText,
              submitted && selectedOption === index && option === correctAnswer
                ? styles.correctOptionText
                : submitted &&
                  selectedOption === index &&
                  option !== correctAnswer
                ? styles.incorrectOptionText
                : {},
            ]}
            onPress={() => setSelectedOption(index)}>
            {option}
          </Text>
        </View>
      ))}
      {submitted && selectedOption !== null && (
        <Text style={styles.feedback}>
          {options[selectedOption] === correctAnswer ? 'CORRECT' : 'INCORRECT'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 18,
  },
  correctOptionText: {
    color: 'green',
  },
  incorrectOptionText: {
    color: 'red',
  },
  feedback: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Question;
