import logo from "../../assets/logo.svg"
import lightMode from "../../assets/light-mode.png"
import darkMode from "../../assets/dark-mode.png"
import style from "./header.module.css"

function Header() {
  function changeTheme(){
    console.log("clicked")
  }

  return (
    <div className={style.container}>
        <a className={style.link} href="/">
          <img className={style.logo} src={logo} alt="logo"/>
        </a>
        <div className={style.theme}>
          <img className={style.icon}
               src={lightMode}
               alt="theme"
               onClick={changeTheme}
          />
        </div>
    </div>
  )
}

export default Header