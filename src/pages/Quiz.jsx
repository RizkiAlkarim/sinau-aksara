import { useState } from "react"
import hanacaraka from "../data/hanacaraka.js"
// import hanacaraka from '../data/pasangan.js'
import Header from "../components/Header.jsx"

function Quiz() {

    const [current, setCurrent] = useState(0)
    const [input, setInput] = useState("")

    function setRandomAksara(){
        const randomIndex = Math.floor(Math.random() * hanacaraka.length)
        setCurrent(randomIndex)
    }

    function handleChange(event){
        setInput(event.target.value)
    }

    function submitAnswer(event){
        event.preventDefault()
        if(input == hanacaraka[current].letter){
            console.log("jawaban benar")
            setInput("")
            setRandomAksara()
        } else {
            setInput("")
            console.log("jawaban kamu salah")
        }
    }

    function passButton(){
        setInput("")
        setRandomAksara()
        console.log("Pass")
    }

  return (
    <div className='h-screen flex flex-col justify-between'>
        <Header />
        <div className="flex flex-col justify-center items-center">
            <div className="h-48 mb-5">
                <h1 className='h-full text-8xl text-red-600 font-bold'>{hanacaraka[current].aksara}</h1>
            </div>
            <form className='flex justify-center gap-8' onSubmit={submitAnswer}>
                <input 
                    className='h-10 w-20 text-2xl font-bold text-center border border-orange-200 rounded p-3 outline-0 caret-transparent focus:border-red-600'
                    type="text"
                    value={input}
                    maxLength={3}
                    onChange={handleChange}
                />
            </form>
        </div>
        <div className="md:w-4/12 lg:w-2/12 p-2 mx-auto w-full">
            <button 
                className='w-full px-3 py-2 bg-orange-200 text-red-600 rounded-md font-bold text-xl text-center tracking-wide'
                onClick={passButton}
            >
            Pass
            </button>
        </div>
    </div>
  )
}

export default Quiz