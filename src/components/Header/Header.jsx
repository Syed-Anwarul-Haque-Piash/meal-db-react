import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>The MealDB</h1>
            <div className='nav'>
                <a href=""><button>Home</button></a>
                <a href="">Api</a>
                <a href="">Forum</a>
                <input type="text" placeholder='search' />
            </div>
        </div>
    );
};

export default Header;