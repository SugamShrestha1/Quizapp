import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import Navbar from './Navbar';

const Home = ({ onStart }) => {
    return (
        <div className=' min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white flex flex-col'>
            <Navbar />
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg mt-12 text-center">
                Test your knowledge
                <br />
                <span className="text-yellow-400 block mt-5">with our fun quizzes</span>
            </h1>

            <button
                onClick={onStart}
                className="flex items-center justify-center gap-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-6 px-12 text-3xl rounded-full shadow-xl transition-all duration-300 hover:scale-105 mx-auto mt-32"
            >
                Start <CiPlay1 size={36} />
            </button>
            <footer className="text-center py-4 bg-purple-800 mt-auto">
                <p className="text-sm text-gray-300">© 2025 Quiz App. All rights reserved.</p>
            </footer>

        </div>
    )
}

export default Home
