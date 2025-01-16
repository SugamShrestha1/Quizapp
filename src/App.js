import React, { useState } from 'react';
import Home from './components/Home';
import CategorySelect from './components/CategorySelect';
import Quiz from './components/Quiz';
import Results from './components/Results';

const App = () => {
  const [stage, setStage] = useState('home'); 
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const handleCategorySelection = (category, fetchedQuestions) => {
    setSelectedCategory(category);
    setQuestions(fetchedQuestions);
    setStage('quiz');
  };

  const handleQuizCompletion = (finalScore) => {
    setScore(finalScore);
    setStage('results');
  };

  const handleRestart = () => {
    setStage('categories');
    setSelectedCategory(null);
    setQuestions([]);
    setScore(0);
  };

  return (
    <div >
      {stage === 'home' && <Home onStart={() => setStage('categories')} />}
      {stage === 'categories' && (
        <CategorySelect onCategorySelect={handleCategorySelection} />
      )}
      {stage === 'quiz' && (
        <Quiz
          questions={questions}
          onFinishQuiz={handleQuizCompletion}
        />
      )}
      {stage === 'results' && <Results score={score} onRestart={handleRestart} />}
    </div>
  );
};

export default App;
