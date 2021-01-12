import React from 'react';
import { cardPropsType } from '../Types/quiz_types';

const Card:React.FC<cardPropsType> = ({ option, handleAnswer }) => {
    return ( 
        <div className="form-check d-flex justify-content-start ml-md-5 ml-sm-1">
            <label className="form-check-label">
                <input type="radio" 
                    className="form-check-input" 
                    name="options" 
                    value={option}
                    onClick = {(e) => handleAnswer(e)}
                />{option}
            </label>
        </div>
     );
}
 
export default Card;