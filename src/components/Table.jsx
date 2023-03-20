import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import back from '../assets/left-arrow.png'
import next from '../assets/right-arrow.png'
import hanacaraka from '../data/hanacaraka'
import pasangan from '../data/pasangan'

const tableItems = [
    hanacaraka,
    pasangan
]

const tableItemsName = [
    'Hanacaraka',
    'Pasangan'
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

    console.log(tableItems.length)

  return (
    <div className='flex flex-col justify-center items-center px-5'>
        <div className='flex justify-center items-center gap-2 mb-5'>
            <button>
                <img className='h-4' src={back} alt="back" onClick={previousTable}/>
            </button>
            <h1 className='font-bold text-2xl'>{tableItemsName[tableIndex]}</h1>
            <button>
                <img className='h-4' src={next} alt="next" onClick={nextTable}/>
            </button>
        </div>
        <div className='grid grid-cols-5 grid-rows-4 place-items-center w-full bg-orange-200 rounded'>
            {tableItems[tableIndex].map(({aksara, letter})=>(
                <div className='w-full' key={letter}>
                    <div className={`font-bold text-3xl text-red-600 text-center p-3 ${tableIndex == 1 && 'mb-7'}`}>
                        <h1>{aksara}</h1>
                    </div>
                    <div className='font-thin text-sm text-black text-center bg-orange-300/50 p-2'>
                        <h1>{letter}</h1>
                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Table