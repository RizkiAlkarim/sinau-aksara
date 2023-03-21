import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import back from '../assets/left-arrow.png'
import next from '../assets/right-arrow.png'
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

    const previousTable = ()=> {
        if(tableIndex > 0){
        setTableIndex((prev)=> prev - 1)
        }
    }

    const nextTable = ()=> {
        if(tableIndex < tableItems.length - 1)
        setTableIndex((prev)=> prev + 1)
    }

  return (
    <motion.div className='flex flex-col justify-center items-center px-5' initial='initial' animate='animate'>
        <motion.div className='flex justify-center items-center gap-4 mb-5' variants={riseAnimation}>
            <button>
                <img className='h-4' src={back} alt="back" onClick={previousTable}/>
            </button>
            <h1 className='font-bold text-2xl'>{tableItemsName[tableIndex]}</h1>
            <button>
                <img className='h-4' src={next} alt="next" onClick={nextTable}/>
            </button>
        </motion.div>
        <motion.div
            className='w-full md:w-9/12 lg:w-7/12 grid grid-cols-5 grid-flow-row place-items-center bg-transparent rounded gap-2'
            variants={delayFadeInAnimation}
        >
            {tableItems[tableIndex].map(({aksara, letter})=>(
                <div className='w-full rounded-md border border-red-600' key={letter}>
                    <div className={`font-bold text-3xl text-red-600 text-center ${tableIndex !== 0 && 'pb-7'}`}>
                        <h1>{aksara}</h1>
                    </div>
                    <div className={`font-thin text-sm text-black text-center ${tableIndex !== 0 && 'pb-2'}`}>
                        <h1>{letter}</h1>
                    </div>
                </div>
            ))}
            
        </motion.div>
    </motion.div>
  )
}

export default Table