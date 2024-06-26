import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {delayFadeInAnimation, riseAnimation} from '../utils/animation'
import Header from "../components/Header"
import { useContext } from "react"
import Context from "../Context"

function Home() {
  const { ThemeContext } = Context
  const { theme } = useContext(ThemeContext)
  const homeItems = [
    {label: "Learn", href:"/learn"},
    {label: "Quiz", href:"/quiz"},
    {label: "About", href:"/about"},
  ]

  return (
  <motion.div initial='initial' animate='animate' className={`h-screen flex flex-col ${theme ? 'bg-black' : 'bg-white'}`}>
  <Header />
  <nav className='flex flex-col justify-center items-center gap-2 py-2 h-full md:pb-32'>
      <div className="overflow-hidden">
        <motion.h1 variants={riseAnimation} className={`text-4xl font-bold text-center mb-5 ${theme ? 'text-white' : 'text-black'}`}>Sugeng <br/> Rawuh</motion.h1>
      </div>
      <motion.ul className='grid grid-rows-2 gap-3 w-[100px]' variants={delayFadeInAnimation}>
        {homeItems.map(({label, href})=>
          <Link
            key={label}
            className='bg-orange-200 text-red-600 rounded-md px-3 py-2 font-bold text-lg text-center'
            to={href}
          >
            {label}
          </Link>
        )}
      </motion.ul>
    </nav>
    </motion.div>
  )
}

export default Home