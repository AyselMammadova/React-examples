import React, {useState} from 'react';

 export function Questions( {questions}) {

    const [questionIndex, setQuestionIndex] = useState(0);

    const goBack = () => setQuestionIndex(prevQuestionIndex => prevQuestionIndex - 1);
    const goNext = () => setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1);

    const firstQuestion = questionIndex === 0;
    const lastQuestion = questionIndex === questions - 1;

    return (
        <nav>
            <span>Question #{questionIndex + 1}</span>
            <div>
                <button onClick={goBack} disabled={firstQuestion}>
                Go Back
                </button>
                <button onClick={goNext} disabled={lastQuestion}>
                Next Question
                </button>
            </div>
        </nav>
    )
}

export default Questions;
