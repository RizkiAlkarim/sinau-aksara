import style from "./navbar.module.css"

function Navbar() {
  return (
  <nav className={style.container}>
      <h1 className={style.title}>WELCOME</h1>
      <ul className={style.items}>
        <a className={style.item} href="/learn">Learn</a>
        <a className={style.item} href="/quiz">Quiz</a>
      </ul>
    </nav>
  )
}

export default Navbar