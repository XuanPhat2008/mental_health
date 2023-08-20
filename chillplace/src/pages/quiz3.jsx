import React, { useState } from 'react';
import './quiz.css';

const questions = [
  {
    id: 1,
    question: 'Do you have a great vocabulary?',
    options: [
      { text: "It's pretty good.", value: 3 },
      { text: "Mine is excellent.", value: 2 },
      { text: "I think so.", value: 1 },
      { text: "I don't.", value: 0 },
    ],
  },
  {
    id: 2,
    question: 'What sounds like the most fun to you?',
    options: [
      { text: "Solving a problem", value: 3 },
      { text: "Writing a short story", value: 2 },
      { text: "Having a debate", value: 1 },
      { text: "Working on a puzzle", value: 0 },
    ],
  },
  {
    id: 3,
    question: 'Are you good with numbers?',
    options: [
      { text: 'Very', value: 3 },
      { text: 'Only rarely', value: 2 },
      { text: 'Not at all', value: 1 },
      { text: 'Only in real-world situations', value: 0 },
    ],
  },
  {
    id: 4,
    question: "Are you good at telling jokes?",
    options: [
      { text: 'I am awful at it.', value: 3 },
      { text: "I'm hysterical!", value: 2 },
      { text: "I'm pretty bad.", value: 1 },
      { text: "I have my funny moments.", value: 0 },
    ],
  },
  {
    id: 5,
    question: 'Are you good at talking to the opposite sex?',
    options: [
      { text: "I'm not great.", value: 3 },
      { text: "I'm superb.", value: 2 },
      { text: "I'm fine.", value: 1 },
      { text: "I'm awful.", value: 0 },
    ],
  },
  {
    id: 6,
    question: "What do you think of Dickens?",
    options: [
      { text: "I don't like him.", value: 3 },
      { text: "He is brilliant.", value: 2 },
      { text: 'He has some good points about society.', value: 1 },
      { text: "Who?", value: 0 },
    ],
  },
  {
    id: 7,
    question: 'Do you like to debate things like the existence of God?',
    options: [
      { text: 'No, that is just a waste of time.', value: 3 },
      { text: "It can be fun.", value: 2 },
      { text: "I love things like that.", value: 1 },
      { text: "I never do thing like that.", value: 0 },
    ],
  },
  {
    id: 8,
    question: 'Do you like to design things in your mind?',
    options: [
      { text: "I do that sometimes.", value: 3 },
      { text: "I am awful at that.", value: 2 },
      { text: "No, I never do that.", value: 1 },
      { text: "It's my favorite thing to do!", value: 0 },
    ],
  },
  {
    id: 9,
    question: 'Have you ever started a novel?',
    options: [
      { text: "No, I have no idea what I would write about.", value: 3 },
      { text: 'Of course I have!', value: 2 },
      { text: "No, but I have thought of writing a book of non-fiction.", value: 1 },
      { text: 'I have tried it, but gave up.', value: 0 },
    ],
  },
  {
    id: 10,
    question: 'How often do you listen to music?',
    options: [
      { text: "Once in a while", value: 3 },
      { text: 'All the time', value: 2 },
      { text: 'A few times a week', value: 1 },
      { text: 'Never', value: 0 },
    ],
  },
  {
    id: 11,
    question: 'Do you think it is fun when you are tested with a difficult math problem?',
    options: [
      { text: "Yes, I love that!", value: 3 },
      { text: 'No, I actually hate that.', value: 2 },
      { text: 'Not at all.', value: 1 },
      { text: 'It can be sometimes', value: 0 },
    ],
  },
  {
    id: 12,
    question: 'Do you stay up at night sometimes wondering what it all means?',
    options: [
      { text: "Nope", value: 3 },
      { text: 'Sometimes', value: 2 },
      { text: 'All the time', value: 1 },
      { text: "I don't know what you are talking about.", value: 0 },
    ],
  },
  {
    id: 13,
    question: 'Can you tell what people are thinking by their facial expression?',
    options: [
      { text: "How would I know?", value: 3 },
      { text: 'Most of the time', value: 2 },
      { text: 'Definitely', value: 1 },
      { text: "Never", value: 0 },
    ],
  },
  {
    id: 14,
    question: 'Do you like detective shows?',
    options: [
      { text: "Those are awesome.", value: 3 },
      { text: 'They can be okay.', value: 2 },
      { text: 'Those are so dull.', value: 1 },
      { text: "Those tend to be terrible.", value: 0 },
    ],
  },
  {
    id: 15,
    question: 'Do you like giving speeches?',
    options: [
      { text: "There is nothing worse.", value: 3 },
      { text: 'I love that.', value: 2 },
      { text: 'It depends on the scene.', value: 1 },
      { text: "I want to die when speaking in public.", value: 0 },
    ],
  },
  {
    id: 16,
    question: 'Can you tell when someone is cheating on you?',
    options: [
      { text: "I think so.", value: 3 },
      { text: "I don't think so.", value: 2 },
      { text: "I don't worry about things like that.", value: 1 },
      { text: "I'm sure I couldn't.", value: 0 },
    ],
  },
  {
    id: 16,
    question: 'Can you tell when someone is cheating on you?',
    options: [
      { text: "I think so.", value: 3 },
      { text: "I don't think so.", value: 2 },
      { text: "I don't worry about things like that.", value: 1 },
      { text: "I'm sure I couldn't.", value: 0 },
    ],
  },
  {
    id: 17,
    question: 'How impulsive are you?',
    options: [
      { text: "Not at all", value: 3 },
      { text: "Moderately", value: 2 },
      { text: "Very", value: 1 },
      { text: "Minimally", value: 0 },
    ],
  },
  {
    id: 18,
    question: 'What do you think about major holidays?',
    options: [
      { text: "They're a great time to see friends and get presents.", value: 3 },
      { text: "They're fun.", value: 2 },
      { text: "They're ridiculous.", value: 1 },
      { text: "They make me uptight.", value: 0 },
    ],
  },
  {
    id: 19,
    question: 'Do you believe that we all choose whether we are happy or not?',
    options: [
      { text: "No, that is ridiculous.", value: 3 },
      { text: "We can choose up to a point.", value: 2 },
      { text: "Of course we do.", value: 1 },
      { text: "We have a little bit of control.", value: 0 },
    ],
  },
  {
    id: 20,
    question: 'Who would you be in World of Warcraft?',
    options: [
      { text: "What are you talking about?", value: 3 },
      { text: "The raid leader", value: 2 },
      { text: "A healer", value: 1 },
      { text: "The tank", value: 0 },
    ],
  },
  {
    id: 21,
    question: 'How important is your job to you?',
    options: [
      { text: "Very", value: 3 },
      { text: "Not very", value: 2 },
      { text: "Not at all", value: 1 },
      { text: "Moderately", value: 0 },
    ],
  },
  {
    id: 22,
    question: 'What movie would you choose to see?',
    options: [
      { text: '"Good Will Hunting"', value: 3 },
      { text: '"Glengarry Glen Ross"', value: 2 },
      { text: '"The Matrix"', value: 1 },
      { text: '"My Architect"', value: 0 },
    ],
  },
  {
    id: 23,
    question: "Do you often spend a lot of time trying to figure out other people's motives?",
    options: [
      { text: "I never do that.", value: 3 },
      { text: "I do that sometimes.", value: 2 },
      { text: "I do that all the time.", value: 1 },
      { text: "I hardly ever do that.", value: 0 },
    ],
  },
  {
    id: 24,
    question: "Would you ever cheat on a test?",
    options: [
      { text: "No, that would be wrong.", value: 3 },
      { text: "Probably not", value: 2 },
      { text: "Sure", value: 1 },
      { text: "Maybe", value: 0 },
    ],
  },
  {
    id: 25,
    question: "Do you ever question why things are the way they are?",
    options: [
      { text: "No, what would be the point?", value: 3 },
      { text: "Sometimes I do.", value: 2 },
      { text: "I do that all the time.", value: 1 },
      { text: "I rarely do that.", value: 0 },
    ],
  },
  {
    id: 26,
    question: "Do you find it easy to talk your way out of something you did wrong?",
    options: [
      { text: "No, I am awful at that.", value: 3 },
      { text: "Yes, I am pretty good at that.", value: 2 },
      { text: "Who decides what is wrong?", value: 1 },
      { text: "I am not that good at that.", value: 0 },
    ],
  },
  {
    id: 27,
    question: "Are you good at reading blueprints?",
    options: [
      { text: "I'm pretty good at it.", value: 3 },
      { text: "I'm not sure.", value: 2 },
      { text: "I'm awful at it.", value: 1 },
      { text: "I'm great at it.", value: 0 },
    ],
  },
  {
    id: 28,
    question: "Are you a nerd?",
    options: [
      { text: "Yes!", value: 3 },
      { text: "Definitely not", value: 2 },
      { text: "I don't think so.", value: 1 },
      { text: "Maybe", value: 0 },
    ],
  },
  {
    id: 29,
    question: "How many zen koans do you know off the top of your head?",
    options: [
      { text: "What is a zen koan?", value: 3 },
      { text: "One", value: 2 },
      { text: "At least two", value: 1 },
      { text: "None", value: 0 },
    ],
  },
  {
    id: 30,
    question: "How long can you last without talking if you're alone with someone in a car?",
    options: [
      { text: "An hour", value: 3 },
      { text: "Fifteen minutes", value: 2 },
      { text: "Two minutes", value: 1 },
      { text: "Half an hour", value: 0 },
    ],
  },
];

const Quiz3 = () => {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false); // State to control showing the result

  const handleOptionClick = (questionId, optionIndex) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: optionIndex,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setShowResult(false);
  };

  const calculateScore = () => {
    let score = 0;
    for (const questionId in answers) {
      const question = questions.find((q) => q.id === parseInt(questionId));
      const selectedOptionIndex = answers[questionId];
      const selectedOptionValue = question.options[selectedOptionIndex].value;
      score += selectedOptionValue;
    }
    return score;
  };

  const renderQuiz = () => {
    if (showResult) {
      const score = calculateScore();
      let state_of_health = '';
      let description = '';
      let sug_music = '';
      let sug_podcast = '';
      let sug_movie = '';

      if (score >= 64) {
        state_of_health = 'Logical';
        description = "You are incredibly logical. Nothing excites you like a complex math problem. You would make an excellent mathematician, scientist or detective. You like to figure out how things work and use deductive reasoning. You aren’t much of a risk taker; you like things in your life to be as predictable as possible.";
        sug_music = "The Logical Songs ";
        sug_podcast = "Ted Talks";
        sug_movie = "billions";
      } else if (score >= 43) {
        state_of_health = 'Linguistic';
        description = "You are an expert wordsmith. You are the type of person that shows their intelligence through the use of language; you would make a great author, journalist, stand-up comedian or public speaker. You are a great storyteller and enjoy entertaining people. Nothing makes you happier than learning a new word and adding it to your linguistic arsenal.";
        sug_music = "Linguistics Chill";
        sug_podcast = "Ted Talks";
        sug_movie = "breaking bad";
      } else if (score >= 22) {
        state_of_health = 'Philosophical';
        description = "You are the philosopher among your friends. While a lot of people just accept the way things are in the world, you always try to figure out why things are the way they are. There is no question too deep for you to think about. You often ponder things like the meaning of life, what happens after we die and how humanity began.";
        sug_music = "Philosophical Music";
        sug_podcast = "Ted Talks";
        sug_movie = "black mirror";
      } else {
        state_of_health = 'Spatial';
        description = "You have much better intelligence than most people. It’s easy for you to think in three dimensions. You would make a great pilot, sculptor, painter or an architect. You could even start your own 3D printing company ! You like to solve problems with your hands, and you’re more likely to use a sketchpad to figure out a problem than most other people";
        sug_music = "Spatial Audio";
        sug_podcast = "Ted Talks";
        sug_movie = "stranger things";
      }

      return (
        <div>
          <h2>You got: {state_of_health}</h2>
          <p>{description}</p>
          <p>You should listen: {sug_music}</p>
          <p>You should hear: {sug_podcast}</p>
          <p>You should watch: {sug_movie}</p>
          <button onClick={handleRestartQuiz}>Take another test</button>
        </div>
      );
    }

    const currentQuestionData = questions[currentQuestion];

    return (
      <div>
        <h2>Question {currentQuestion + 1}</h2>
        <p>{currentQuestionData.question}</p>
        <ul>
          {currentQuestionData.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(currentQuestionData.id, index)}
              className={answers[currentQuestionData.id] === index ? 'selected' : ''}
            >
              {option.text} {/* Use option.text to render the text of the option */}
            </li>
          ))}
        </ul>
        <button onClick={handleNextQuestion}>Next</button>
      </div>
    );
  };

  return (
    <div className='quiz-holder'>
      <div className="phq-9-quiz-container">
        {renderQuiz()}
      </div>
    </div>
  );
};

export default Quiz3;