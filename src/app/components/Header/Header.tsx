import s from './Header.module.css';

function Header() {
  return (
    <div className={s.headerWrapper}>
        <div className={s.title}>Quix</div>
        <p className={s.tagline}>The complete quizzing solotion</p>
    </div>
  )
}

export default Header