const quizData = [
  {
    category: 'Geography',
    questions: [
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
        question:
          'What continent is the only one to span all four hemispheres?',
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
    ],
  },
  {
    category: 'Grammar',
    questions: [
      {
        question:
          "Which of the following is a correct plural form of 'octopus'?",
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
    ],
  },
  {
    category: 'History',
    questions: [
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
        options: [
          'Romulus',
          'Alexander the Great',
          'Julius Ceasar',
          'Cleopatra',
        ],
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
        correct: '1989',
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
    ],
  },
  {
    category: 'Sports',
    questions: [
      {
        question: 'Which country has won the FIFA World Cup the most times?',
        options: ['Brazil', 'Germany', 'Argentina', 'Italy'],
        correct: 'Brazil',
        correctIndex: 0,
      },
      {
        question: 'In which sport is the Ryder Cup contested?',
        options: ['Golf', 'Tennis', 'Rugby', 'Cricket'],
        correct: 'Golf',
        correctIndex: 0,
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
        correctIndex: 0,
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
        correctIndex: 1,
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
        correctIndex: 3,
      },
    ],
  },
  {
    category: 'Music',
    questions: [
      {
        question: 'Who is known as the "King of Pop"?',
        options: ['Michael Jackson', 'Elvis Presley', 'James Brown', 'Prince'],
        correct: 'Michael Jackson',
        correctIndex: 0,
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
        correctIndex: 2,
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
        correctIndex: 0,
      },
      {
        question:
          'What musical genre is characterized by its origins in New Orleans, brass and woodwind instruments, and syncopated rhythms?',
        options: ['Blues', 'Hip-Hop', 'Jazz', 'Reggae'],
        correct: 'Jazz',
        correctIndex: 2,
      },
      {
        question: 'What instrument does a percussionist primarily play?',
        options: ['Guitar', 'Drums', 'Piano', 'Violin'],
        correct: 'Drums',
        correctIndex: 1,
      },
    ],
  },
  {
    category: 'Animals',
    questions: [
      {
        question: 'What is the largest mammal in the world?',
        options: ['African Elephant', 'Blue Whale', 'Giraffe', 'Polar Bear'],
        correct: 'Blue Whale',
        correctIndex: 1,
      },
      {
        question: 'What is the fastest land animal?',
        options: ['Cheetah', 'Lion', 'Greyhound', 'Pronghorn Antelope'],
        correct: 'Cheetah',
        correctIndex: 0,
      },
      {
        question: 'What is the largest species of bear?',
        options: ['Grizzly Bear', 'Polar Bear', 'Black Bear', 'Kodiak Bear'],
        correct: 'Polar Bear',
        correctIndex: 1,
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
        correctIndex: 1,
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
        correctIndex: 2,
      },
    ],
  },
  {
    category: 'Science',
    questions: [
      {
        question: 'Hurricanes only form over _________?',
        options: ['Cold land', 'Warm Water', 'Warm land', 'Cold Water'],
        correct: 'Warm Water',
        correctIndex: 1,
      },
      {
        question:
          'Which of the following measures the amount of damage done by an earthquake?',
        options: [
          'Selvaggi Scale',
          'Richter Scale',
          'Kanamori Scale',
          'Mercalli Scale',
        ],
        correct: 'Richter Scale',
        correctIndex: 1,
      },
      {
        question: 'What is the powerhouse of the cell?',
        options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Chloroplast'],
        correct: 'Mitochondria',
        correctIndex: 1,
      },
      {
        question: 'What is the largest organ in the human body?',
        options: ['Brain', 'Heart', 'Liver', 'Skin'],
        correct: 'Skin',
        correctIndex: 3,
      },
      {
        question: 'Which gas do plants absorb during photosynthesis?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        correct: 'Carbon Dioxide',
        correctIndex: 1,
      },
    ],
  },
  {
    category: 'Maths',
    questions: [
      {
        question: 'What is the value of pi (π) to two decimal places?',
        options: ['3.14', '3.16', '3.12', '3.18'],
        correct: '3.14',
        correctIndex: 0,
      },
      {
        question: 'What is the sum of the interior angles of a triangle?',
        options: ['180 degrees', '90 degrees', '360 degrees', '270 degrees'],
        correct: '180 degrees',
        correctIndex: 0,
      },
      {
        question: 'What is the square root of 169?',
        options: ['9', '16', '13', '17'],
        correct: '13',
        correctIndex: 2,
      },
      {
        question: 'What is the value of "x" in the equation 2x + 5 = 15?',
        options: ['5', '10', '15', '20'],
        correct: '5',
        correctIndex: 0,
      },
      {
        question: 'What is the formula to calculate the area of a circle?',
        options: ['πr²', '2πr', 'πd', 'π/2r'],
        correct: 'πr²',
        correctIndex: 0,
      },
    ],
  },
  {
    category: 'Movies',
    questions: [
      {
        question: 'Who directed the movie "The Shawshank Redemption"?',
        options: [
          'Frank Darabont',
          'Steven Spielberg',
          'Quentin Tarantino',
          'Christopher Nolan',
        ],
        correct: 'Frank Darabont',
        correctIndex: 0,
      },
      {
        question: 'Which movie won the Academy Award for Best Picture in 1994?',
        options: [
          'Forrest Gump',
          'Pulp Fiction',
          "Schindler's List",
          'Braveheart',
        ],
        correct: 'Forrest Gump',
        correctIndex: 0,
      },
      {
        question:
          'Which actor played the lead role in the movie "The Godfather"?',
        options: ['Al Pacino', 'Robert De Niro', 'Marlon Brando', 'Joe Pesci'],
        correct: 'Marlon Brando',
        correctIndex: 2,
      },
      {
        question:
          'Which movie features the famous line: "Here\'s looking at you, kid."?',
        options: [
          'Gone with the Wind',
          'Casablanca',
          'Citizen Kane',
          'The Wizard of Oz',
        ],
        correct: 'Casablanca',
        correctIndex: 1,
      },
      {
        question: 'Who played the character of Neo in the movie "The Matrix"?',
        options: [
          'Keanu Reeves',
          'Brad Pitt',
          'Leonardo DiCaprio',
          'Tom Cruise',
        ],
        correct: 'Keanu Reeves',
        correctIndex: 0,
      },
    ],
  },
  {
    category: 'Art',
    questions: [
      {
        question: 'Who painted the famous artwork "Starry Night"?',
        options: [
          'Leonardo da Vinci',
          'Vincent van Gogh',
          'Pablo Picasso',
          'Claude Monet',
        ],
        correct: 'Vincent van Gogh',
        correctIndex: 0,
      },
      {
        question: 'Which artist is known for painting the "Mona Lisa"?',
        options: [
          'Vincent van Gogh',
          'Leonardo da Vinci',
          'Pablo Picasso',
          'Michelangelo',
        ],
        correct: 'Leonardo da Vinci',
        correctIndex: 1,
      },
      {
        question: 'Who created the sculpture "David"?',
        options: [
          'Vincent van Gogh',
          'Leonardo da Vinci',
          'Pablo Picasso',
          'Michelangelo',
        ],
        correct: 'Michelangelo',
        correctIndex: 3,
      },
      {
        question:
          'Which art movement includes artists like Salvador Dalí and René Magritte?',
        options: [
          'Cubism',
          'Surrealism',
          'Impressionism',
          'Abstract Expressionism',
        ],
        correct: 'Surrealism',
        correctIndex: 1,
      },
      {
        question:
          'Who is the artist behind the painting "The Persistence of Memory"?',
        options: [
          'Salvador Dalí',
          'Vincent van Gogh',
          'Pablo Picasso',
          'Claude Monet',
        ],
        correct: 'Salvador Dalí',
        correctIndex: 0,
      },
    ],
  },
];

export default quizData;
