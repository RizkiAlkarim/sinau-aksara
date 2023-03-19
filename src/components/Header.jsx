import { useContext } from "react"
import { Link } from "react-router-dom"
import Context from "../Context"
import logo from "../assets/logo.svg"
import lightMode from "../assets/light-mode.png"
import darkMode from "../assets/dark-mode.png"

function Header() {
  const { ThemeContext } = Context
  const { theme, changeTheme} = useContext(ThemeContext)

  return (
    <div className="flex justify-between items-center px-3 py-2" style={{backgroundColor: theme ? "grey" : "white"}}>
        <Link className='flex justify-center items-center' to="/">
          <img className='h-5' src={logo} alt="logo"/>
        </Link>
        <div>
          <img className='h-8'
               src={theme ? darkMode : lightMode}
               alt="theme"
               onClick={changeTheme}
          />
        </div>
    </div>
  )
}

export default Header