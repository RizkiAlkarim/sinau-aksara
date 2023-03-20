import React from 'react'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import { riseAnimation, delayFadeInAnimation } from '../utils/animation'

function About() {
  return (
    <motion.div initial='initial' animate='animate' className='h-screen'>
        <Header />
        <div className='container mx-auto'>
            <div className='flex justify-center items-center mb-10 overflow-hidden'>
                <motion.h1 className='font-bold text-3xl text-red-600' variants={riseAnimation}>About</motion.h1>
            </div>
            <div className='w-full mx-auto px-5'>
                <motion.p className='indent-5' variants={delayFadeInAnimation}>
                    <span className='font-bold'>Sinau aksara </span>
                    is a platform to learn javanese character for you who want to start learning javanese language.</motion.p>
            </div>
        </div>
    </motion.div>
  )
}

export default About