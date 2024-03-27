import React from 'react';
import {RadioButton} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';

export default function Question({question, options, state, correctAnswer}) {
  const [choice, setChoice] = React.useState();

  return (
    <View>
      <Text style={styles.question}>{question}</Text>
      {state == 'submitted' && options[choice] == correctAnswer && (
        <Text style={styles.correct}>CORRECT</Text>
      )}
      {state == 'submitted' && options[choice] != correctAnswer && (
        <Text style={styles.incorrect}>INCORRECT</Text>
      )}
      {options.map((option, index) => (
        <View
          key={option}
          style={[
            styles.options,
            options[index] == correctAnswer &&
              state == 'submitted' &&
              styles.correctChoice,
            options[choice] != correctAnswer &&
              choice == index &&
              state == 'submitted' &&
              styles.incorrectChoice,
          ]}>
          <RadioButton
            status={choice === index ? 'checked' : 'unchecked'}
            onPress={() => state != 'submitted' && setChoice(index)}
          />
          <Text
            style={styles.option}
            onPress={() => state != 'submitted' && setChoice(index)}>
            {index + 1}. {option}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  question: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  correct: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'green',
  },
  incorrect: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'red',
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  option: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  correctChoice: {
    backgroundColor: 'green',
  },
  incorrectChoice: {
    backgroundColor: 'red',
  },
});
