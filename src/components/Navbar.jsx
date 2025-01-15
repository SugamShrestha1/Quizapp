import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-purple-600  p-4 text-5xl text-yellow-400 font-mono font-semibold'>
            <div>
                <Link to='/'>MyQuiz</Link>
            </div>
        </nav>
    )
}
export default Navbar;
