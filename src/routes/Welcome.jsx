import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

export default function Welcome() {
    return (
        <>
            <section className="welcome-page d-flex align-items-center justify-content-center w-100">
                <div className="welcome-box d-flex flex-column align-items-center justify-content-center">
                    <span>
                        <Typewriter
                            className="arimo"
                            words={['Welcome to', 'React.js Quiz']}
                            loop={true}
                            cursor
                            cursorStyle=''
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </span>
                    <Link
                        to="/home"
                        className='start-btn rubik'>Get Started</Link>
                </div>
            </section>
        </>
    );
};