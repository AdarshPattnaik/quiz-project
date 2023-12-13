import React from 'react';

export default function Quiz({ num, question, handleAnswerOptionClick }) {

    const handleOpt = (i) => {
        if (i === 1) return "A";
        if (i === 2) return "B";
        if (i === 3) return "C";
        if (i === 4) return "D";
    }

    return (
        <div className='quiz-box d-flex flex-column p-4'>
            <h2 className='arimo'>{`Question: ${num}`}</h2>
            <h4 className='arimo'>{question.questionText}</h4>
            <div className='answer-section d-flex flex-column rubik'>
                {question.answerOptions.map((answerOption, index) => (
                    <button
                        className='ans-btn text-start'
                        key={index}
                        onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                        {`${handleOpt(index + 1)}: ${answerOption.answerText}`}
                    </button>
                ))}
            </div>
        </div>
    );
};