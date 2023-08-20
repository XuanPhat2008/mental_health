import React, { useState } from 'react';
import './quiz.css';

const questions = [
  {
    id: 1,
    question: 'Do you experience stomach issues or other physical anxiety symptoms?',
    options: [
      { text: "No, or if I do, I don't know about it.", value: 2 },
      { text: "No, and I get physicals regularly, so I'd know.", value: 1 },
      { text: "I may have one or two physical symptoms of anxiety.", value: 0 },
    ],
  },
  {
    id: 2,
    question: 'How does anxiety influence your sleep?',
    options: [
      { text: "Occasionally, if something's really on my mind, I'll have trouble falling asleep.", value: 2 },
      { text: "Sometimes I stay awake sorting out things I'm concerned about, but I don't spend much time on this.", value: 1 },
      { text: "I don't lose sleep worrying about anything. Ever.", value: 0 },
    ],
  },
  {
    id: 3,
    question: 'How do you handle traffic?',
    options: [
      { text: "I'm a classic 'road rager'; I experience a lot of anger and frustration in traffic.", value: 2 },
      { text: "I get somewhat upset waiting in heavy traffic. I try to stay calm, but I do stress over it.", value: 1 },
      { text: "I take routes that have light traffic, but I don't get too bothered if I have to wait.", value: 0 },
    ],
  },
  {
    id: 4,
    question: "Do you fear a major crisis that's beyond your control?",
    options: [
      { text: "I don't worry about it at all. I'd rather not think about it.", value: 2 },
      { text: "I worry about it constantly, imagining dire scenarios.", value: 1 },
      { text: "I remind myself that I've made a plan, then I think about something else.", value: 0 },
    ],
  },
  {
    id: 5,
    question: 'How do you think about the future?',
    options: [
      { text: "I expect the best, but try to anticipate what could go wrong and make contingency plans.", value: 2 },
      { text: "I live in the moment and don't worry about the future.", value: 1 },
      { text: 'I often think about the worst case scenarios and obsess about them.', value: 0 },
    ],
  },
  {
    id: 6,
    question: "How does anxiety affect your attitude about flying?",
    options: [
      { text: "Thoughts of attacks or crashes sometimes enter my mind, but I don't dwell.", value: 2 },
      { text: "I don't alter my travel plans, but I do stress about all the things that can go wrong.", value: 1 },
      { text: "I don't worry about these things at all. Why would something like this happen to me?", value: 0 },
    ],
  },
  {
    id: 7,
    question: 'How concerned are you about what others think of you?',
    options: [
      { text: 'I avoid situations where I may be embarrassed, get too sweaty, or blush profusely.', value: 2 },
      { text: "I worry a lot about how I come across with people, but I don't avoid social situations or friendships because of it.", value: 1 },
      { text: "I don't worry about these things at all. Why would something like this happen to me?", value: 0 },
    ],
  },
  {
    id: 8,
    question: 'How concerned are you about your own mortality?',
    options: [
      { text: 'I fear death, and often worry about situations that may not seem dangerous to others.', value: 0 },
      { text: 'I take care of myself in hopes of living as long as possible, but I mostly at peace with mortality.', value: 1 },
      { text: "I don't worry at all, and live for the moment. We all have to go sometime, right?", value: 2 },
    ],
  },
  {
    id: 9,
    question: 'How does anxiety affect your activities?',
    options: [
      { text: "I don't let fear get in the way of doing things, ever.", value: 2 },
      { text: "I don't limit activities, but experience anxiety daily over one thing or another.", value: 1 },
      { text: "There are things I'd like to do but don't; I avoid what may give me anxiety.", value: 0 },
    ],
  },
  {
    id: 10,
    question: 'How much do you worry about things that are beyond your control?',
    options: [
      { text: 'I worry about them a lot, and restrict my life to control what I can in my environment.', value: 2 },
      { text: 'I often worry about worst-case scenarios and things that could go wrong.', value: 1 },
      { text: "I worry a little, and do what I can to plan for them, but I don't lose sleep about it.", value: 0 },
    ],
  },
];

const Quiz2 = () => {
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

      if (score >= 11) {
        state_of_health = 'Calm, Cool, and Collected';
        description = "It looks like anxiety isn't a problem for you at all--or is it? Worry and anxiety can be useful emotions in that they alert us to when something isn't right in our lives, and inspire us to make changes; however, excessive levels of anxiety can be harmful and counterproductive. While it's wonderful that you don't allow yourself to stress over the future or 'what-if's, be careful that you don't also block out the messages that anxiety can bring you; be sure to tune into that inner voice that lets you know if changes need to be made, precautions taken, or potential problems avoided. Don't start stressing over small stuff, of course, but just listen to the messages that anxiety can bring before you let it go.";
        sug_music = "calm vibes";
        sug_podcast = "Calm It Down";
        sug_movie = "The Golden Girls";
      } else if (score >= 8) {
        state_of_health = 'Anxiety Is Your Friend';
        description = "You appear to have a healthy level of anxiety in your life. What does that mean? Worry and anxiety can be useful emotions in that they alert us to when something isn't right in our lives, and inspire us to make changes; however, excessive levels of anxiety can be harmful and counterproductive. You appear to allow anxiety and worry to do their job inspire you to make healthy changes when necessary--but not cause undue stress. Good for you! For the times that you do experience anxiety that hurts, rather than helps, the following resources can help you to better understand anxiety, stress, and anxiety disorders";
        sug_music = "Anxiety Relief";
        sug_podcast = "Calming Anxiety";
        sug_movie = "Bob Burgers";
      } else {
        state_of_health = 'You Might Have An Unhealthy Level of Anxiety';
        description = "According to your responses to this self-test, you may have an unhealthy level of anxiety. Worry and anxiety can be useful emotions in that they alert us to when something isn't right in our lives, and inspire us to make changes; however, excessive levels of anxiety can be harmful and counterproductive. If your levels of anxiety and worry are affecting your life, causing you to avoid doing things you'd like to do, or affecting your health and relationships, you may have an anxiety disorder. Because this test isn't intended to replace a professional analysis, you may want to talk to your doctor to rule out health problems or anxiety disorders.";
        sug_music = "Healing Sounds";
        sug_podcast = "The Healing Podcast";
        sug_movie = "Friends";
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

export default Quiz2;