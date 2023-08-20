import React, { useState } from 'react';
import './quiz.css';

const questions = [
  {
    id: 1,
    question: 'When it comes to decisions:',
    options: [
      { text: 'I have the final say over decisions made within my group.', value: 2 },
      { text: 'I make the final decision, but I accept a lot of input from my team.', value: 1 },
      { text: 'I let group members make their own decisions.', value: 0 },
    ],
  },
  {
    id: 2,
    question: 'I consider suggestions made by others in the group.',
    options: [
      { text: "Rarely. I'm the most knowledgeable member of the group.", value: 2 },
      { text: "All the time. Collaboration is the key to success.", value: 1 },
      { text: 'Always. I rely on the group to decide our direction.', value: 0 },
    ],
  },
  {
    id: 3,
    question: 'When it comes to giving orders:',
    options: [
      { text: 'Tell group members what to do, how to do it, and when I want it done.', value: 2 },
      { text: 'I provide direction, but also offer support and accept feedback from the team.', value: 1 },
      { text: "I don't really like to give orders. I just let people do their thing.", value: 0 },
    ],
  },
  {
    id: 4,
    question: "If a group member makes a mistake:",
    options: [
      { text: 'They need to be reprimanded and punished.', value: 2 },
      { text: 'They need supportive feedback and additional guidance.', value: 1 },
      { text: 'They can figure out how to resolve it on their own.', value: 0 },
    ],
  },
  {
    id: 5,
    question: 'How much do you monitor members of your group ?',
    options: [
      { text: "I carefully watch them to make sure they are performing tasks properly.", value: 3 },
      { text: "I check in once in a while and let them know that I am available if they need help.", value: 2 },
      { text: 'Start insulting the other person', value: 1 },
      { text: 'I leave them alone. They know more about their job than I do.', value: 0 }
    ],
  },
  {
    id: 6,
    question: "Which best describes your approach to motivating team members?",
    options: [
      { text: 'People are most motivated by clear rewards and punishments.', value: 2 },
      { text: 'People are more motivated when they feel involved and valued.', value: 1 },
      { text: 'Group members should motivate themselves.', value: 0 },
    ],
  },
  {
    id: 7,
    question: 'Which of the following statements best describes you ?',
    options: [
      { text: 'A need for security', value: 2 },
      { text: "A need for participation", value: 1 },
      { text: "A need for independence", value: 0 },
    ],
  },
  {
    id: 8,
    question: 'Do you accept input from group members?',
    options: [
      { text: "No. I don't have time to worry about other people's ideas.", value: 0 },
      { text: 'Sure, but I retain the final say over major decisions.', value: 1 },
      { text: 'All the time! Group members make most of the decisions on their own.', value: 2 },
    ],
  },
  {
    id: 9,
    question: 'When things go wrong, I tend to:',
    options: [
      { text: 'Figure things out on my own.', value: 2 },
      { text: 'Ask others for ideas and solutions', value: 1 },
      { text: 'Expect others to solve the problem.', value: 0 },
    ],
  },
  {
    id: 10,
    question: 'I want the people in my group to feel:',
    options: [
      { text: 'Like they have a clear list of tasks that need to be accomplished.', value: 2 },
      { text: 'Like they are involved in the process and can add something to the group.', value: 1 },
      { text: 'Like they are in control.', value: 0 },
    ],
  },
];

const Quiz5 = () => {
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
        state_of_health = 'Delegative Leadership';
        description = "Delegative leaders, also known as laissez-faire leaders, allow group members to make decisions. This style is best used in situations where the leader needs to rely on qualified employees. The leader cannot be an expert in all situations, which is why it is important to delegate certain tasks out to knowledgeable and trustworthy group members.";
        sug_music = "Focus Music";
        sug_podcast = "Coaching Real Leaders";
        sug_movie = "peaky blinders";
      } else if (score >= 8) {
        state_of_health = 'Democratic Leadership';
        description = "Democratic leaders, also known as participative leaders, accept input from one or more group members when making decisions and solving problems, but the leader retains the final say when choices are made. Group members tend to be encouraged and motivated by this style of leadership. This style of leadership often leads to more effective and accurate decisions, since no leader can be an expert in all areas. Input from group members with specialized knowledge and expertise creates a more complete basis for decision-making.";
        sug_music = "Democratic Songs";
        sug_podcast = "Coaching Real Leaders";
        sug_movie = "peaky blinders";
      } else {
        state_of_health = 'Authoritarian';
        description = "Authoritarian leaders provide clear expectations to group members on what should be done, when it should be completed and how it should be accomplished. These leaders make decisions without input from group members. Authoritarian leadership is best used in situations when there is little time for group decision-making or when the leader is the one best equipped to solve the problem or give directions. Overuse of an authoritarian style can be construed as bossy and controlling. Worst-case examples of this style can be seen when leaders utilize bullying techniques such as yelling, abusing power or demeaning group members. Remember, the most effective leaders tend to utilize different leadership styles depending upon the situation.";
        sug_music = "Leadership Songs";
        sug_podcast = "Coaching Real Leaders";
        sug_movie = "peaky blinders";
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

export default Quiz5;