import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import back from '../assets/left-arrow.png'
import next from '../assets/right-arrow.png'
import hanacaraka from '../data/hanacaraka'
import pasangan from '../data/pasangan'

function Table() {
    const [table, setTable] = useState(0)

    const tableItems = [
        hanacaraka,
        pasangan
    ]

    const previousTable = ()=> {
        if(table > 0){
        setTable((prev)=> prev - 1)
        }
    }

    const nextTable = ()=> {
        setTable((prev)=> prev + 1)
    }


  return (
    <div className='flex flex-col justify-center items-center px-5 h-full'>
        <div className='flex justify-center items-center gap-2 mb-5'>
            <Link>
                <img className='h-4' src={back} alt="back" onClick={previousTable}/>
            </Link>
            <h1 className='font-bold text-2xl'>{table}</h1>
            <Link>
                <img className='h-4' src={next} alt="next" onClick={nextTable}/>
            </Link>
        </div>
        <div className='grid grid-cols-5 grid-rows-4 place-items-center w-full bg-orange-200 rounded p-2'>
            {hanacaraka.map(({aksara, letter})=>(
                <div key={letter}>
                    <div className='font-bold text-3xl text-red-600 text-center'>{aksara}</div>
                    <div className='font-thin text-sm text-gray-700 text-center'>{letter}</div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Table