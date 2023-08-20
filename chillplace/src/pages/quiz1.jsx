import React, { useState } from 'react';
import './quiz.css';

const questions = [
  {
    id: 1,
    question: 'To prepare for a night out...',
    options: [
      { text: 'I buy the latest outfit, tell my friends, then dance the night away.', value: 2 },
      { text: 'Call a few of my closest friends to see if they will be there.', value: 1 },
      { text: 'Prepare? My friends have to drag me out most nights.', value: 0 },
    ],
  },
  {
    id: 2,
    question: 'Being around people makes me feel...',
    options: [
      { text: "Like I'm alive!", value: 2 },
      { text: "Inspired. I feed off of others' energy but there are times when I'd rather be alone.", value: 1 },
      { text: 'A bit exhausted. Being around others can be draining.', value: 0 },
    ],
  },
  {
    id: 3,
    question: 'When given a choice between working as part of a team or working alone, I would prefer to...',
    options: [
      { text: 'Work with as many people as possible.', value: 2 },
      { text: 'Work as part of a small group.', value: 1 },
      { text: 'Work by myself.', value: 0 },
    ],
  },
  {
    id: 4,
    question: "What's your idea of the perfect date?",
    options: [
      { text: 'A live concert in Central Park.', value: 2 },
      { text: 'Dinner and a Broadway show.', value: 1 },
      { text: 'Staying in and binge-watching Netflix.', value: 0 },
    ],
  },
  {
    id: 5,
    question: 'During parties or social gatherings, I tend to...',
    options: [
      { text: "Talk to as many people as I can. I've been called a social butterfly.", value: 2 },
      { text: "Spend time with a few people that I know. It's about quality not quantity.", value: 1 },
      { text: 'Keep to myself. You can find me by the punch bowl.', value: 0 },
    ],
  },
  {
    id: 6,
    question: "When I'm dealing with a personal problem, I prefer to...",
    options: [
      { text: 'Talk about it with others and enlist their help.', value: 2 },
      { text: 'Call my closest friend and discuss it on the phone.', value: 1 },
      { text: 'Solve it on my own. I tend to be more private.', value: 0 },
    ],
  },
  {
    id: 7,
    question: 'On the topic of public speaking...',
    options: [
      { text: 'I enjoy it. All eyes on me!', value: 2 },
      { text: "It's not my strongest suit but I'll do it if I have to.", value: 1 },
      { text: "I get super nervous. I'd rather write 5 research papers first.", value: 0 },
    ],
  },
  {
    id: 8,
    question: 'People describe you as thoughtful, reserved, and soft-spoken.',
    options: [
      { text: 'Never, I am a very talkative person.', value: 0 },
      { text: 'Sometimes, but I can also be quite talkative with my inner circle.', value: 1 },
      { text: 'All the time, I am a very quiet and mellow person.', value: 2 },
    ],
  },
  {
    id: 9,
    question: 'I enjoy meeting new people.',
    options: [
      { text: 'Yes, I can make a friend at the supermarket.', value: 2 },
      { text: 'Sometimes, but I can also be quite talkative with my inner circle.', value: 1 },
      { text: 'All the time, I am a very quiet and mellow person.', value: 0 },
    ],
  },
  {
    id: 10,
    question: 'How do you prefer to communicate?',
    options: [
      { text: 'In person. Tell me to my face.', value: 2 },
      { text: 'Over the phone.', value: 1 },
      { text: 'Through texts or messaging.', value: 0 },
    ],
  },
];

const Quiz1 = () => {
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

      if (score >= 14) {
        state_of_health = 'Extrovert';
        description = "Extroverts tend to be quite outgoing and talkative. They enjoy spending time with other people, and feel energized in social situations. Oftentimes, extroverts like being the focus of attention.\
        As an extrovert, people probably describe you as friendly and outgoing. You love meeting new people and have no problem making new friends. Spending time with others leaves you feeling energized and inspired.";
        sug_music = "EXTROVERT";
        sug_podcast = "The extroverts Are Out to Get Me";
        sug_movie = "Dead Ringers";
      } else if (score >= 8) {
        state_of_health = 'Ambivert';
        description = "Most people lie somewhere in between the two polar ends of each personality dimension. Your results indicate that you have both extrovert and introvert qualities. What exactly does this mean?\
        Extroverts tend to be quite outgoing and talkative. They enjoy spending time with other people, and feel energized in social situations. Oftentimes, extroverts like being the focus of attention.\
        Introverts tend to enjoy solitude and spending quiet time alone. They expend energy in social situations, and prefer not to be the center of attention.\
        Since your results indicate that you are somewhere in the middle of the extrovert/introvert continuum, you tend to have qualities that fit into both ends of the spectrum. You like spending time with others, but you also enjoy having time to yourself. You might not mind being the center of attention once in a while, but you probably prefer to stay out of the spotlight on a day-to-day basis.";;
        sug_music = "AMBIVERT";
        sug_podcast = "A Happy Ambivert";
        sug_movie = "The Walking Dead";
      } else {
        state_of_health = 'Introvert';
        description = "Introverts tend to enjoy solitude and spending quiet time alone. They expend energy in social situations and prefer not to be the center of attention.\
        In general, people might describe you as quiet. You probably prefer to spend time alone or with a small group of close friends and family. You may dislike busy social events such as parties and often feel drained after spending a lot of time around people you do not know well.\
        In addition to understanding the main characteristics of introverts, it can be helpful to understand more about dating an introvert and how to distinguish between introversion and shyness.";
        sug_music = "INTROvert";
        sug_podcast = "The Introvert, Dear Podcast";
        sug_movie = "Peaky Blinders";
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

export default Quiz1;