import { useContext } from "react"
import { Link } from "react-router-dom"
import Context from "../../Context"
import logo from "../../assets/logo.svg"
import lightMode from "../../assets/light-mode.png"
import darkMode from "../../assets/dark-mode.png"
import style from "./header.module.css"

function Header() {
  const { ThemeContext } = Context
  const { theme, changeTheme} = useContext(ThemeContext)

  return (
    <div className={style.container} style={{backgroundColor: theme ? "grey" : "white"}}>
        <Link className={style.link} to="/">
          <img className={style.logo} src={logo} alt="logo"/>
        </Link>
        <div className={style.theme}>
          <img className={style.icon}
               src={theme ? darkMode : lightMode}
               alt="theme"
               onClick={changeTheme}
          />
        </div>
    </div>
  )
}

export default Header