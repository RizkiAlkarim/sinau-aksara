import { Link } from "react-router-dom"
import style from "./mainmenu.module.css"

function MainMenu() {
  return (
  <nav className={style.container}>
      <h1 className={style.title}>Sugeng Rawuh</h1>
      <ul className={style.items}>
        <Link className={style.item} to="/learn">Learn</Link>
        <Link className={style.item} to="/quiz">Quiz</Link>
      </ul>
    </nav>
  )
}

export default MainMenu