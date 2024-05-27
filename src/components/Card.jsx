import {useContext} from 'react'
import Context from '../Context'

function Card({aksara, letter, onClick, isHidden}) {
    const { ThemeContext } = Context
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`w-full rounded-md md:border-2 border border-red-600`}>
            <h1
                className='w-full font-bold md:text-4xl text-3xl text-red-600 inline-block text-center align-middle pt-3'
                onClick={onClick}
            >{aksara}</h1>
            <h1 className={`md:font-bold font-thin md:text-lg text-sm text-center pb-4 text-black ${theme && !isHidden &&'text-white'} ${!theme && isHidden &&'text-white'}`}>
                {letter}
            </h1>
        </div>
  )
}

export default Card