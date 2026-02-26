import s from './QuickAccess.module.css';

function QuickAccess({ questionNumber }: { questionNumber: number }) {
    return (
        <div className={s.quickAccessQuestion}>Question {questionNumber}</div>
    )
}

export default QuickAccess;