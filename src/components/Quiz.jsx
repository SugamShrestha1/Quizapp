import React, { useState } from 'react';

const Quiz = ({ questions, onFinishQuiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false); // Track whether the question is answered

  const currentQuestion = questions[currentQuestionIndex];
  const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort();

  const handleAnswerClick = (answer) => {
    if (answered) return; // Prevent further clicks after an answer is selected

    setSelectedAnswer(answer);
    setAnswered(true);

    if (answer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setAnswered(false); // Reset after moving to next question
      } else {
        onFinishQuiz(score + (answer === currentQuestion.correct_answer ? 1 : 0));
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-purple-700 text-white p-6">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-lg shadow-lg max-w-lg w-full">
        <h3 className="text-2xl font-semibold text-center mb-6">{currentQuestion.question}</h3>
        <div className="space-y-4">
          {answers.map((answer, index) => {
            const isSelected = selectedAnswer === answer;
            const isCorrect = answer === currentQuestion.correct_answer;

            return (
              <button
                key={index}
                className={`w-full py-3 rounded-lg text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105
                  ${isSelected
                    ? isCorrect
                      ? 'bg-green-500 text-white' // Correct answer green
                      : 'bg-red-500 text-white' // Incorrect answer red
                    : isCorrect && answered
                    ? 'bg-green-500 text-white' // Correct answer green even if not selected
                    : 'bg-yellow-400 text-black hover:bg-yellow-500'}
                  ${answered ? 'cursor-default' : 'cursor-pointer'}`}
                onClick={() => handleAnswerClick(answer)}
                disabled={answered}
              >
                {answer}
              </button>
            );
          })}
        </div>
        <div className="mt-6 text-center text-lg">
          <p>
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <div className="mt-4 bg-gray-400 rounded-full h-2.5">
            <div 
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
