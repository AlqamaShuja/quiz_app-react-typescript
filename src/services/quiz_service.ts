import { QuestionType, Quiz } from '../Types/quiz_types';

const shuffleArray = (array: any) => [...array].sort(() => Math.random() - 0.5)

export const getQuizQuestion = async (noOfQuestion: number, level: string): Promise<QuestionType[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${noOfQuestion}&difficulty=${level}&type=multiple`);
    const {results} = await res.json();
    // return results;
    const quiz: QuestionType[] = results.map((questionObj: Quiz, ind: number) => {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    });

    return quiz;
}