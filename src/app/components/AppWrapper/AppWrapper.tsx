import { useState } from "react";
import QuizProgress from "../QuizProgress/QuizProgress";
import { QuizTemplate } from "../QuizTemplate/QuizTemplate";
import s from './AppWrapper.module.css';
import { QUESTIONS } from "../../../mocks/questions";
import Header from "../Header/Header";

export function AppWrapper() {
    const [listOfQuestions] = useState(QUESTIONS);
    return (
        <div className={s.appWrapperContainer}>
            <Header/>
            <div className={s.quizSection}>
                <QuizTemplate question={listOfQuestions[0]} />
                <QuizProgress totalNumberOfQuestions={listOfQuestions.length}/>
            </div>
            <div className={s.footer}>Here comes the footer</div>
        </div>
    )
}