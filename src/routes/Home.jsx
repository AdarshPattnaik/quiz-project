import React, { useState } from 'react';
import data from '../data/api';
import Result from '../components/Result';
import Quiz from '../components/Quiz';

export default function Home() {

    const [num, setNum] = useState(1);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        setNum(prev => prev + 1);
        if (nextQuestion < data.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setNum(1);
        setShowResult(false);
    };

    return (
        <>
            <section className='home-layout d-flex align-items-center justify-content-center w-100'>
                {showResult ? (
                    <Result
                        length={data.length}
                        score={score}
                        resetQuiz={resetQuiz} />
                ) : (
                    <Quiz
                        num={num}
                        question={data[currentQuestion]}
                        handleAnswerOptionClick={handleAnswerOptionClick}
                    />
                )}
            </section>
        </>
    );
};