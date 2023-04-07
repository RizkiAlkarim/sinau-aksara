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
import Card from './Card'
import BigCard from './BigCard'

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

    const zoomCard = (event) => {
        setIsCardClicked((prev)=> !prev)
        console.log(event)
    }

  return (
    <motion.div className='relative container mx-auto flex flex-col justify-center items-center px-5 py-4' initial='initial' animate='animate'>
        <div className='relative w-full flex justify-center items-center mb-5' >
            <motion.div className='flex justify-center items-center gap-4' variants={riseAnimation}>
                {/* <button>
                    <img className='h-4' src={back} alt="back" onClick={previousTable}/>
                </button> */}
                <h1 className='font-bold text-2xl'>{tableItemsName[tableIndex]}</h1>
                {/* <button>
                    <img className='h-4' src={next} alt="next" onClick={nextTable}/>
                </button> */}
            </motion.div>
            <button className='absolute right-0'onClick={hideLetter}><img src={isHidden ? show : hide} alt="" /></button>
        </div>
        <motion.div
            className='w-full h-full md:w-7/12 lg:w-5/12 xl:w-4/12 grid grid-cols-5 grid-flow-row place-items-center rounded gap-2'
            variants={delayFadeInAnimation}
        >
            {tableItems[tableIndex].map(({aksara, letter})=>(
                <Card 
                    aksara={aksara}
                    letter={letter}
                    key={letter}
                    onClick={zoomCard}
                    isHidden={isHidden}
                />
            ))}
        </motion.div>
        <BigCard
            // aksara={aksara}
            // letter={letter}
            onClick={zoomCard}
            isCardClicked={isCardClicked}
        />
    </motion.div>
  )
}

export default Table