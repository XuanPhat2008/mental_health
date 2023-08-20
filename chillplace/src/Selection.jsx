import React from 'react';
import { Link } from 'react-router-dom';
import './Selection.css';
import quiz1 from './pages/quiz1';

const QuizSelection = () => {
  return (
    <div className="quiz-selection">
      <h1>Which quiz would you like to take?</h1>
      <div className="quiz-buttons">
        <Link to="/quizz/1" className="quiz-button">Are you and Extrovert or Introvert ?</Link>
        <Link to="/quizz/2" className="quiz-button">Do you worry Too Much ?</Link>
        <Link to="/quizz/3" className="quiz-button">What type of Smart are you ?</Link>
        <Link to="/quizz/4" className="quiz-button">Are you Emotionally Intelligent ?</Link>
        <Link to="/quizz/5" className="quiz-button">What is your Leadership style ?</Link>
        <Link to="/quizz/6" className="quiz-button">Mental Health Quiz</Link>
        {/* Add more quiz buttons */}
      </div>
    </div>
  );
};

export default QuizSelection;
