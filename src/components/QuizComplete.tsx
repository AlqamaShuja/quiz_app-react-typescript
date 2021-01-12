import React from 'react';
import { quizCompletePropsType } from '../Types/quiz_types';

 
const QuizComponent: React.FC<quizCompletePropsType> = ({ score, startQuizAgain }) => {
    return ( 
        <div className="card text-center d-flex justify-content-center align-items-center h-100 w-50 mx-auto mt-3">
            <div className="card-header w-100 bg-success text-white font-weight-bold">
                Quiz Completed
            </div>
            <div className="card-body">
                <h5 className="card-title">Your score is: {score}</h5>
                <button className="btn btn-success mt-3" onClick={startQuizAgain}> Start Again </button>
            </div>
        </div>
    );
}
 
export default QuizComponent;