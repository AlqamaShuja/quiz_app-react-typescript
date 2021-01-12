import React, { useEffect, useState } from 'react';
import './App.css';
import Questions from './components/Questions';
import QuizComplete from './components/QuizComplete';
import { getQuizQuestion } from './services/quiz_service';
import { QuestionType } from './Types/quiz_types';


function App() {

  const [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [currentQuesNo, setCurrentQuesNo] = useState(0);
  let [score, setScore] = useState(0);
  let [buttonDisable, setButtonDisable] = useState(true);
  let [currAns, setCurrAns] = useState("");
  
  useEffect(() => {
    async function fetchData() {
      const questions: QuestionType[] = await getQuizQuestion(6, 'easy');
      console.log(questions);
      setQuiz(questions);
    }

    fetchData();

  }, []);

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if(currentQuesNo === quiz.length - 1){
      // alert(`Quiz done, Your score is: ${score}`);
      // setCurrentQuesNo(0);
      // setScore(0);
    }
    else{
      if(quiz[currentQuesNo].answer === currAns){
        setScore(++score);
      }
      setButtonDisable(true);
      setCurrentQuesNo(++currentQuesNo);
    }
  }

  const handleAnswer = (e: React.FormEvent<HTMLInputElement>) => {
    setButtonDisable(false);
    setCurrAns(e.currentTarget.value);
  }

  const startQuizAgain = () => {
    setCurrentQuesNo(0);
    setScore(0);
  }

  if(!quiz.length)
    return <h3>Loading...</h3>
  if(currentQuesNo !== quiz.length - 1){
    return (
      <div className="App">
        <Questions question={quiz[currentQuesNo].question} 
          options={quiz[currentQuesNo].option}
          callback={handleSubmit}
          count={currentQuesNo+1}
          handleAnswer={handleAnswer}
          buttonDisable={buttonDisable}
        />
      </div>
    );
  }else{
    return <QuizComplete score={score} startQuizAgain={startQuizAgain} />
  }
}

export default App;
