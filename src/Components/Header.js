import React from 'react';
import Typewriter from 'typewriter-effect';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className='main-info'>
            <h1> I'am Nikhil Chavan</h1>
            <h2>
            <Typewriter
            options={{
              strings:[
                "Electrical Engineer",
                "Web Developer",
                "UI/UX Designer",
                "Front-end Developer",
            ],
            autoStart: true,
            loop:true,
            delay: 40,
            deleteSpeed: 30,
            }} 
            />
            </h2>
        </div>
    </div>
  )
}

export default Header;