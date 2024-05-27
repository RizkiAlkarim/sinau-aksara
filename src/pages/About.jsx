import {useContext} from 'react'
import Context from '../Context'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import { riseAnimation, delayFadeInAnimation } from '../utils/animation'

function About() {
  const {ThemeContext} = Context
  const {theme} = useContext(ThemeContext)
  return (
    <motion.div initial='initial' animate='animate' className={`h-screen ${theme ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <Header />
        <div className='container mx-auto'>
            <div className='flex justify-center items-center mb-10 overflow-hidden'>
                <motion.h1 className='font-bold text-3xl text-red-600' variants={riseAnimation}>About</motion.h1>
            </div>
            <div className='w-full mx-auto px-5 md:px-96'>
                <motion.p variants={delayFadeInAnimation}>
                    <span className='font-bold'>SinauAksara </span>
                    is a platform to learn javanese character for you who want to start learning javanese language. It is developed with ReactJS for UI, TailwindCSS for styling and Framer Motion for animation</motion.p>
            </div>
        </div>
    </motion.div>
  )
}

export default About