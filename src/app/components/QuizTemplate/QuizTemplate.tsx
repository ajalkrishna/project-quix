
import type { IQuestion } from '../../models/CommonInterfaces';
import Option from '../Option/Option';
import s from './QuizTemplate.module.css';
export function QuizTemplate({ question }: {question: IQuestion}) {
    return (
        <div className={s.quizTemplate}>
            <div className={s.quizTile}>
                <h2>{question.question}</h2>
                {
                    Object.keys(question.answers).map(option => <Option optionKey={option.toUpperCase()} optionValue={question.answers[option]} />)
                }
            </div>

        </div>
    )
}