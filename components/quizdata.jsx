import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {categories} from '..components/quizdata';

function GeographyQuiz() {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['New York', 'London', 'Paris', 'Dublin'],
      correct: 'Paris',
    },
    {
      question: 'Where is the Great Barrier Reef located?',
      options: ['Australia', 'Canada', 'Cuba', 'The Bahamas'],
      correct: 'Australia',
    },
    {
      question: 'What continent is the only one to span all four hemispheres?',
      options: ['Australia', 'Asia', 'Africa', 'Europe'],
      correct: 'Africa',
    },
    {
      question: 'Which country has the highest population?',
      options: ['China', 'India', 'United States', 'Brazil'],
      correct: 'China',
    },
    {
      question: 'Which river is the longest in the world?',
      options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
      correct: 'Nile',
    },
  ];
}

function GrammarQuiz() {
  const questions = [
    {
      question: "Which of the following is a correct plural form of 'octopus'?",
      options: ['Octopi', 'Octopodes', 'Octopuses', 'Octopods'],
      correct: 'Octopuses',
    },
    {
      question:
        "Which of the following is a correct example of using the word 'literally'?",
      options: [
        'I literally ate a million cookies yesterday.',
        'She was literally flying in the sky.',
        'He literally laughed his head off.',
        'The party was literally on fire.',
      ],
      correct: 'He literally laughed his head off.',
    },
    {
      question:
        'Which of the following sentences demonstrates correct usage of a pun?',
      options: [
        "I'm reading a book on anti-gravity. It's impossible to put down!",
        'She went to the bank to deposit her money.',
        'The flowers danced in the wind.',
        'He has a heart of gold.',
      ],
      correct:
        "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      question: 'How did this _________ broken?',
      options: ['was', 'get', 'be', 'become'],
      correct: 'get',
    },
    {
      question: "What is the superlative form of the word 'good'?",
      options: ['Gooder', 'Goodest', 'Best', 'Better'],
      correct: 'Best',
    },
  ];
}

function HistoryQuiz() {
  const questions = [
    {
      question:
        'Which ancient civilization kn known for building the Great Wall of China?',
      options: [
        'Ancient Egypt',
        'Ancient Greece',
        'Ancient Rome',
        'Ancient China',
      ],
      correct: 'Ancient China',
    },
    {
      question:
        'Who is the legendary figure credited with founding the city of Rome?',
      options: ['Romulus', 'Alexander the Great', 'Julius Ceasar', 'Cleopatra'],
      correct: 'Romulus',
    },
    {
      question:
        'Who was the first emperor of the Mongol Empire, known for his conquests and establishment of one of the largest empires in history?',
      options: [
        'Genghis Khan',
        'Attilia the Hun',
        'Alexander the Great',
        'Julius Ceasar',
      ],
      correct: 'Genghis Khan',
    },
    {
      question:
        'What year did the Berlin Wall fall, marking the end of the Cold War?',
      options: ['1985', '1989', '1991', '1993'],
      correct: '',
    },
    {
      question:
        'Which country was the first to successfully launch a human into space?',
      options: [
        'United States',
        'Russia (Soviet Union)',
        'China',
        'United Kingdom',
      ],
      correct: 'Russia (Soviet Union)',
    },
  ];
}

function SportsQuiz() {
  const questions = [
    {
      question: 'Which country has won the FIFA World Cup the most times?',
      options: ['Brazil', 'Germany', 'Argentina', 'Italy'],
      correct: 'Brazil',
    },
    {
      question: 'In which sport is the Ryder Cup contested?',
      options: ['Golf', 'Tennis', 'Rugby', 'Cricket'],
      correct: 'Golf',
    },
    {
      question:
        'Who is the most decorated Olympian of all time, with 28 Olympic medals?',
      options: [
        'Michael Phelps',
        'Usain Bolt',
        'Simone Biles',
        'Katie Ledecky',
      ],
      correct: 'Michael Phelps',
    },
    {
      question: "Which NBA player is known as 'The King'?",
      options: [
        'Kobe Bryant',
        'Lebron James',
        'Michael Jordan',
        'Magic Johnson',
      ],
      correct: 'Lebron James',
    },
    {
      question:
        'Which athlete famously said, "Float like a butterfly, sting like a bee"?',
      options: [
        'Mike Tyson',
        'Sugar Ray Robinson',
        'Joe Frazier',
        'Muhammad Ali',
      ],
      correct: 'Muhammad Ali',
    },
  ];
}

function MusicQuiz() {
  const questions = [
    {
      question: 'Who is known as the "King of Pop"?',
      options: ['Michael Jackson', 'Elvis Presley', 'James Brown', 'Prince'],
      correct: 'Michael Jackson',
    },
    {
      question: 'Who is the lead vocalist of the band Queen?',
      options: [
        'Mick Jagger',
        'David Bowie',
        'Freddie Mercury',
        'Roger Daltrey',
      ],
      correct: 'Freddie Mercury',
    },
    {
      question:
        'Which album is often considered the best-selling album of all time?',
      options: [
        "'Thriller' by Michael Jackson",
        "'The Dark Side of the Moon' by Pink Floyd",
        "'Sgt. Pepper's Lonely Hearts Club Band' by The Beatles",
        "'Back in Black' by AC/DC",
      ],
      correct: "'Thriller' by Michael Jackson",
    },
    {
      question:
        'What musical genre is characterized by its origins in New Orleans, brass and woodwind instruments, and syncopated rhythms?',
      options: ['Blues', 'Hip-Hop', 'Jazz', 'Reggae'],
      correct: 'Jazz',
    },
    {
      question: 'What instrument does a percussionist primarily play?',
      options: ['Guitar', 'Drums', 'Piano', 'Violin'],
      correct: 'Drums',
    },
  ];
}

function AnimalsQuiz() {
  const questions = [
    {
      question: 'What is the largest mammal in the world?',
      options: ['African Elephant', 'Blue Whale', 'Giraffe', 'Polar Bear'],
      correct: 'Blue Whale',
    },
    {
      question: 'What is the fastest land animal?',
      options: ['Cheetah', 'Lion', 'Greyhound', 'Pronghorn Antelope'],
      correct: 'Cheetah',
    },
    {
      question: 'What is the largest species of bear?',
      options: ['Grizzly Bear', 'Polar Bear', 'Black Bear', 'Kodiak Bear'],
      correct: 'Polar Bear',
    },
    {
      question: "Which animal is known as the 'Gentle Giant' of the ocean?",
      options: [
        'Great White Shark',
        'Blue Whale',
        'Killer Whale (Orca)',
        'Giant Squid',
      ],
      correct: 'Blue Whale',
    },
    {
      question: 'What is the largest species of snake?',
      options: [
        'Boa Constrictor',
        'King Cobra',
        'Green Anaconda',
        'Reticulated Python',
      ],
      correct: 'Green Anaconda',
    },
  ];
}

export default function QuizData() {}
