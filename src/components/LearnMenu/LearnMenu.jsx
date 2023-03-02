import { Link } from "react-router-dom"
import style from "./learnmenu.module.css"

function LearnMenu() {
  return (
    <nav className={style.container}>
      <h1 className={style.title}>LEARN</h1>
      <ul className={style.items}>
        <Link className={style.item} to="#">Hanacaraka</Link>
        <Link className={style.item} to="#">Sandhangan</Link>
        <Link className={style.item} to="#">Pasangan</Link>
      </ul>
    </nav>
  )
}

export default LearnMenu