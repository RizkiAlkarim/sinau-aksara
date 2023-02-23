import style from "./learnnavbar.module.css"

function LearnNavbar() {
  return (
    <nav className={style.container}>
      <h1 className={style.title}>LEARN</h1>
      <ul className={style.items}>
        <a className={style.item} href="#">Hanacaraka</a>
        <a className={style.item} href="#">Sandhangan</a>
        <a className={style.item} href="#">Pasangan</a>
      </ul>
    </nav>
  )
}

export default LearnNavbar