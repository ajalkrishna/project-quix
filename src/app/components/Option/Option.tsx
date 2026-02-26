import s from './Option.module.css';

function Option({ optionKey, optionValue }: { optionKey: string, optionValue: string }) {
    return (
        <div className={s.optionTemplate}>
            <div className={s.optionIdentifier}>{optionKey}</div>
            <div className={s.answerOption}>{optionValue}</div>
        </div>
    )
}

export default Option;