import React from 'react';
import { questionPropsType } from '../Types/quiz_types';
import Card from './Card';

const Questions: React.FC<questionPropsType> = ({ question, options, callback, count, handleAnswer, buttonDisable }) => {
    return (
        <div className="card text-center d-flex justify-content-center align-items-center h-100 w-50 mx-auto mt-3">
            <div className="card-header w-100 bg-primary font-weight-bold">
                Questions No {count}
            </div>
            <div className="card-body">
                <h5 className="card-title">{question}</h5>
                <form onSubmit={callback}>
                    {options.map((opt: string, i: number) => {
                        return (
                            <Card option={opt} key={i} handleAnswer={handleAnswer} /> 
                        )
                    })}
                    <input type="submit" disabled={buttonDisable} 
                        className="btn btn-primary mt-3" 
                        placeholder="Submit"
                    />
                </form>
            </div>
        </div>
    );
}
 
export default Questions;