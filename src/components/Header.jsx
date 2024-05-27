import { useContext } from "react"
import { Link } from "react-router-dom"
import Context from "../Context"
import logo from "../assets/logo.svg"
import lightMode from "../assets/light-mode.png"
import darkMode from "../assets/dark-mode.png"
import { motion } from "framer-motion"
import { fadeInAnimation, rotateAnimation } from "../utils/animation"

function Header() {
  const { ThemeContext } = Context
  const { theme, changeTheme} = useContext(ThemeContext)

  return (
    <motion.div initial='initial' animate='animate' className={`flex justify-between items-center px-3 py-2 md:px-8 md:py-6 ${theme ? 'bg-black' : 'bg-white'}`}>
        <Link className='flex justify-center items-center' to="/">
          <motion.img className='h-5' src={logo} alt="logo" variants={fadeInAnimation}/>
        </Link>
        <div>
          <motion.img
               className={`h-8 ${theme ? 'invert' : 'invert-0'}`}
               src={theme ? darkMode : lightMode}
               alt="theme"
               onClick={changeTheme}
               variants={rotateAnimation}
          />
        </div>
    </motion.div>
  )
}

export default Header