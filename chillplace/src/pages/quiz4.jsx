import React, { useState } from 'react';
import './quiz.css';

const questions = [
  {
    id: 1,
    question: 'Two of your friends are fighting so you…',
    options: [
      { text: "Try to help them understand each other's point of view", value: 3 },
      { text: "Pick a side and bad-mouth the other friend", value: 2 },
      { text: "Avoid both of them until the fight is over", value: 1 },
      { text: "Let them vent their emotions to you", value: 0 },
    ],
  },
  {
    id: 2,
    question: 'Your friend tells you she has suffered a miscarriage. How do you respond?',
    options: [
      { text: "Allow your friend to express her feelings and offer your support", value: 3 },
      { text: "Convince her to go out with some friends to get her mind off it", value: 2 },
      { text: "Give her some time to herself", value: 1 },
      { text: "Spend time with her, but avoid talking about her loss", value: 0 },
    ],
  },
  {
    id: 3,
    question: 'When you are facing an unpleasant task, you tend to…',
    options: [
      { text: 'Make a plan and work on it a little each day', value: 3 },
      { text: 'Put it off until the last minute', value: 2 },
      { text: 'Get it over with as soon as possible', value: 1 },
      { text: 'Not do it at all', value: 0 },
    ],
  },
  {
    id: 4,
    question: "Your daughter throws a fit when you tell her she cannot have candy at the store. You…",
    options: [
      { text: 'Talk to her about how she is feeling', value: 3 },
      { text: "Let her cry and try to ignore it", value: 2 },
      { text: "Buy her the candy to get her to quiet down", value: 1 },
      { text: "Quickly gather your things and leave the store", value: 0 },
    ],
  },
  {
    id: 5,
    question: 'During a heated argument, I am more likely to...',
    options: [
      { text: "Call for a short break before resuming the discussion", value: 3 },
      { text: "Give in and apologize to quickly end the argument", value: 2 },
      { text: "Start insulting the other person", value: 1 },
      { text: "Shut down and stop responding to the other person", value: 0 },
    ],
  },
  {
    id: 6,
    question: "When making an important decision, I tend to…",
    options: [
      { text: "Follow my instincts", value: 3 },
      { text: "Go with the easiest option", value: 2 },
      { text: 'Rely on direction from other people', value: 1 },
      { text: "Shut down and stop responding to the other person", value: 0 },
    ],
  },
  {
    id: 7,
    question: 'Which of the following statements best describes you?',
    options: [
      { text: 'I have an easy time making friends and getting to know new people', value: 3 },
      { text: "I have to really get to know someone before they become a true friend", value: 2 },
      { text: "I find it difficult to meet people and make friends", value: 1 },
      { text: "I am unable to maintain close friendships", value: 0 },
    ],
  },
  {
    id: 8,
    question: 'You get a bad grade on an assignment you put a lot of effort into. How do you deal?',
    options: [
      { text: "Think about ways you could have improved the project", value: 3 },
      { text: "Confront the professor and ask for a better grade", value: 2 },
      { text: "Berate and criticize your own work", value: 1 },
      { text: "Decide the class is stupid and stop putting forth your best efforts!", value: 0 },
    ],
  },
  {
    id: 9,
    question: 'Your co-worker has an annoying habit that seems to get worse every day. You...',
    options: [
      { text: "Tell your co-worker what is bothering you", value: 3 },
      { text: 'Make a complaint about the behavior to your supervisor', value: 2 },
      { text: "Talk about your coworker behind his back", value: 1 },
      { text: 'Suffer in silence', value: 0 },
    ],
  },
  {
    id: 10,
    question: 'You are already overworked when your boss assigns you another big project. How do you feel?',
    options: [
      { text: "Anxious about getting all the work done", value: 3 },
      { text: 'Overwhelmed by the task before you', value: 2 },
      { text: "Angry that your boss hasn't noticed how overworked you are", value: 1 },
      { text: "Depressed and sure that you can never finish it all", value: 0 },
    ],
  },
];

const Quiz4 = () => {
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
        state_of_health = 'High Emotional Intelligence';
        description = "People who score high on emotional intelligence tend to be skilled at interpreting, understanding, and acting upon emotions. They are adept at dealing with social or emotional conflicts, expressing their feelings, and dealing with emotional situations. It's important to remember that no matter how good your score is, there is always room to improve your emotional intelligence. Discover some of the key components of emotional intelligence and consider areas where you are not as strong and think of ways that you can learn and grow. Take stock of your strong points and find ways to continue to develop and apply these skills.";
        sug_music = "Happy Music";
        sug_podcast = "Let's Get Emotionally Intelligent Podcast";
        sug_movie = "la la land";
      } else if (score >= 8) {
        state_of_health = 'Average Emotional Intelligence';
        description = "People with an average score on emotional intelligence tend to be pretty good at interpreting, understanding, and acting upon emotions. They are usually quite good at dealing with social or emotional conflicts, expressing their feelings, and dealing with emotional situations. While you have some solid emotional skills, sometimes you might find yourself feeling overwhelmed by conflict or emotionally charged situations. Even though you are about average at interpreting and controlling your emotions, it may help to learn a bit more about the characteristics of emotionally intelligent people.";;
        sug_music = "Chill Songs";
        sug_podcast = "Let's Get Emotionally Intelligent Podcast";
        sug_movie = "outlander";
      } else {
        state_of_health = 'Low Emotional Intelligence';
        description = "People with a low score on emotional intelligence may have a difficult time interpreting, understanding, and acting on emotions. They often have difficulty expressing their own emotions and feel uncomfortable around the emotional displays of other people. In some cases, those who score low may experience low self-esteem, poor self-confidence, and may have difficulty feeling empathy and showing love for others. The important thing to remember is that even though you may feel that emotions are difficult to understand, there are things that you can do to improve your emotional intelligence. Once you recognize some of the key signs of low emotional intelligence, you can explore different ways to improve your emotional skills. If you feel that you are low on emotional intelligence, try to actively identify your own emotions and the emotions of those around you. Taking a class to improve your communication skills can also be helpful.";
        sug_music = "Smile";
        sug_podcast = "Let's Get Emotionally Intelligent Podcast";
        sug_movie = "bojack horseman";
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

export default Quiz4;