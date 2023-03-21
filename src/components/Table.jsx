import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import back from '../assets/left-arrow.png'
import next from '../assets/right-arrow.png'
import hide from '../assets/hide.svg'
import show from '../assets/show.svg'
import hanacaraka from '../data/hanacaraka'
import pasangan from '../data/pasangan'
import sandhangan from '../data/sandhangan'
import { motion } from 'framer-motion'
import { riseAnimation, delayFadeInAnimation, fadeInAnimation } from '../utils/animation'

const tableItems = [
    hanacaraka,
    pasangan,
    sandhangan
]

const tableItemsName = [
    'Hanacaraka',
    'Pasangan',
    'Sandhangan'
]

function Table() {
    const [tableIndex, setTableIndex] = useState(0)
    const [isHidden, setIsHidden] = useState(false)
    const [isCardClicked, setIsCardClicked] = useState(false)

    const previousTable = ()=> {
        if(tableIndex > 0){
        setTableIndex((prev)=> prev - 1)
        }
    }

    const nextTable = ()=> {
        if(tableIndex < tableItems.length - 1)
        setTableIndex((prev)=> prev + 1)
    }

    const hideLetter = () => {
        setIsHidden((prev)=> !prev)
    }

    const zoomCard = () => {
        setIsCardClicked((prev)=> !prev)
    }

  return (
    <motion.div className='container mx-auto flex flex-col justify-center items-center px-5' initial='initial' animate='animate'>
        <div className='w-full flex justify-center items-center mb-5' >
        <motion.div className='flex justify-center items-center gap-4' variants={riseAnimation}>
            <button>
                <img className='h-4' src={back} alt="back" onClick={previousTable}/>
            </button>
            <h1 className='font-bold text-2xl'>{tableItemsName[tableIndex]}</h1>
            <button>
                <img className='h-4' src={next} alt="next" onClick={nextTable}/>
            </button>
        </motion.div>
        <button onClick={hideLetter}><img src={isHidden ? show : hide} alt="" /></button>
        </div>
        <motion.div
            className='w-full h-full md:w-7/12 lg:w-5/12 xl:w-4/12 grid grid-cols-5 grid-flow-row place-items-center rounded gap-2'
            variants={delayFadeInAnimation}
        >
            {tableItems[tableIndex].map(({aksara, letter})=>(
            <div 
                className={`w-full rounded-md md:border-2 border border-red-600`}
                onClick={zoomCard}
                key={letter}
            >
                <div className='w-full pt-3 pb-7'>
                    <h1 className='w-full font-bold md:text-4xl text-3xl text-red-600 inline-block text-center align-middle'>{aksara}</h1>
                </div>
                <div className={`md:font-bold font-thin md:text-lg text-sm text-center pb-4 ${isHidden ? 'text-transparent' : "text-black"}`}>
                    <h1 className=''>{letter}</h1>
                </div>
            </div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Table