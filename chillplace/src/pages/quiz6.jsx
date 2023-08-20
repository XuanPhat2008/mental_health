import React, { useState } from 'react';
import './quiz.css';

const questions = [
  {
    id: 1,
    question: 'You are in a school environment, and suddenly, one day, an older student bullies you, hitting you relentlessly. This situation is genuinely challenging and can evoke many emotions and pressures within you, so what will you do ?',
    options: [
      { text: "Meet the older student politely", value: 3 },
      { text: "Report to a teacher or school administration office", value: 2 },
      { text: "Know your rights and responsibilities", value: 1 },
      { text: "Stay still to let he/her continue", value: 0 },
    ],
  },
  {
    id: 2,
    question: 'When at home, while using your phone, your parents forbid you from using it, make you go to school, and prohibit you from texting your friends, what will you do ?',
    options: [
      { text: "Ignore them, continue using the phone", value: 3 },
      { text: "Yell at them, say that you have studied too much even though ...", value: 2 },
      { text: "Obey them, give them your phone and study", value: 1 },
      { text: "Pack up your things, and ready for leave the home trip.", value: 0 },
    ],
  },
  {
    id: 3,
    question: 'In the academic environment, you are competing to be at the top of the class, but this time, you slipped out of the top position, what will you do ?',
    options: [
      { text: 'Reflect and Learn', value: 3 },
      { text: 'Stay Motivated and Persistent', value: 2 },
      { text: "Don't care about that anymore", value: 1 },
      { text: "Study, but not care about what is going on now", value: 0 },
    ],
  },
  {
    id: 4,
    question: "Peer pressure, when you no longer care about grades, but those around you are too excellent and accomplished, can put pressure on you to achieve similar results, if so, what will you do ?",
    options: [
      { text: 'Competitive Environment: Groups like flexin til the last breath, ...', value: 3 },
      { text: "Fear of Judgement: Scare of what people say about you", value: 2 },
      { text: "Use that as motivation, try harder and work smart", value: 1 },
      { text: "Let eveything down, don’t care about anything", value: 0 },
    ],
  },
  {
    id: 5,
    question: 'Parents are getting divorced, and you are too young to make decisions on your own, what will you do ?',
    options: [
      { text: "Sad and unable to make a decision", value: 3 },
      { text: "Don't bottle things up. Share your feelings with people you trust.", value: 2 },
      { text: "Keep doing the things you enjoy. Take regular breaks from worrying", value: 1 },
      { text: "Make right decision", value: 0 },
    ],
  },
];

const Quiz6 = () => {
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

      if (score >= 15) {
        state_of_health = 'Minimal depression';
        description = "If you're experiencing minimal depression, incorporating mindfulness and stress-reduction techniques into your routine can be helpful. Practice deep breathing, meditation, or yoga to center yourself. Engaging in activities that bring laughter and joy can also counteract feelings of depression. Remember to be patient with yourself and give yourself credit for your efforts.";
        sug_music = "Happy a Great Day";
        sug_podcast = "Let's Talk About Mental Health";
        sug_movie = "Sex education";
      } else if (score >= 10) {
        state_of_health = 'Mild depression.';
        description = "For mild depression, focusing on building a strong support network can be beneficial. Spend time with friends and family who are understanding and empathetic. Engage in hobbies and activities that give you a sense of accomplishment. Keep in mind that even small positive changes can have a significant impact on your overall well-being.";
        sug_music = "Happy a Great Day";
        sug_podcast = "Let's Talk About Mental Health";
        sug_movie = "Sex education";
      } else if (score >= 5) {
        state_of_health = 'Moderate depression';
        description = "If you're dealing with moderate depression, it's a good idea to prioritize self-care. Engage in activities that bring you joy and relaxation. Regular exercise, healthy eating, and maintaining a consistent sleep schedule can also contribute to improving your mood. If your symptoms persist, consider reaching out to a mental health professional for guidance.";
        sug_music = "Happy a Great Day";
        sug_podcast = "Let's Talk About Mental Health";
        sug_movie = "Sex education";
      }
      else {
        state_of_health = 'Severe depression';
        description = "If you're experiencing severe depression, it's important to reach out for professional help as soon as possible. Consider talking to a mental health professional, such as a therapist or psychiatrist. Treatment options may include therapy, medication, and lifestyle changes. Remember that you don't have to face this alone, and seeking support is a sign of strength.";
        sug_music = "Happy a Great Day";
        sug_podcast = "Let's Talk About Mental Health";
        sug_movie = "Sex education";
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

export default Quiz6;