import React from 'react';
import { Link } from 'react-router-dom';

export default function Result({ length, score, resetQuiz }) {
    return (
        <div className='result-page w-100 d-flex align-items-center justify-content-center'>
            <div className="result-box d-flex flex-column align-items-center justify-content-center">
                <h2 className='arimo'>Your final score is {score}/{length}.</h2>
                <div className="btn-grp d-flex flex-row">
                <button
                    onClick={resetQuiz}
                    className="start-btn">Play Again</button>
                <Link
                    className="start-btn"
                    to="/">
                    Welcome Page
                </Link>
                </div>
            </div>
        </div>
    );
};