import QuickAccess from '../QuickAccess/QuickAccess';
import s from './QuizProgress.module.css';

function QuizProgress({ totalNumberOfQuestions }) {
    return (
        <div className={s.activeQuizProgress}>
            <div className={s.progressSection}>

            </div>
                <hr />
            <div className={s.quickAccessSection}>
                {
                    Array.from({ length: totalNumberOfQuestions }, (_value, index) => index + 1).map((each) => {
                        return <QuickAccess questionNumber={each} />
                    })
                }
            </div>
        </div>

    )
}

export default QuizProgress;