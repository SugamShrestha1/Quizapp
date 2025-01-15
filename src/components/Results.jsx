import React from 'react';

const Results = ({ score, onRestart }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-purple-700 text-white p-5">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-lg shadow-lg text-center max-w-md w-full">
      <h1 className="text-3xl font-bold mb-6 flex items-center justify-center space-x-2 animate-bounce">
          <span>🎉</span>
          <span>Quiz Completed!</span>
          <span>🎉</span>
        </h1>
        <p className="text-xl mb-4">Your Score:</p>
        <div className="text-6xl font-extrabold text-yellow-300  mb-8">
          {score}
        </div>
        <button
          onClick={onRestart}
          className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Results;
