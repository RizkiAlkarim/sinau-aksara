import { useState } from "react"
import { useForm } from "react-hook-form"
import hanacaraka from "../../data/hanacaraka.js"
import style from "./quiz.module.css"

function Quiz() {
    const [letter, setLetter] = useState(hanacaraka[Math.floor(Math.random() * hanacaraka.length)].aksara)
    const [tempLetter, setTempLetter] = useState("")
    const [input, setInput] = useState()

    const randomIndex = Math.floor(Math.random() * hanacaraka.length)
    const aksara = hanacaraka[randomIndex].aksara

    function handleChange(event){
        setInput(event.target.value)
        console.log(input)
    }

    function changeQuestion(){
        setTempLetter(letter)
        setLetter(aksara)
        if(tempLetter == letter){
            setLetter(aksara)
        }
    }

    function submitAnswer(event){
        //if(answer == question){}
        // if(input.toLowerCase(input) == hanacaraka[current].letter){
        //     changeQuestion()
        // }
        // else {
        //     console.log("jawaban kamu salah")
        // }
        event.preventDefault()
        changeQuestion()
        console.log(input)
    }

    function passButton(){
        changeQuestion()
    }

  return (
    <div className={style.container}>
        <div className={style.question}>
            <h1 className={style.letter}>{letter}</h1>
        </div>
        <div className={style["answer-container"]}>
            <form className={style.answer} onSubmit={submitAnswer}>
                <input className={style["answer-box"]} type="text" maxLength={1} onChange={handleChange}/>
                <input className={style["answer-box"]} type="text" maxLength={1}  onChange={handleChange}/>
            </form>
        </div>
        <div className={style["button-container"]}>
            <button 
                className={style.pass}
                onClick={passButton}
            >
            pass
            </button>
            <button
                className={style.submit}
                onClick = {submitAnswer}
            >
            submit
            </button>
        </div>
    </div>
  )
}

export default Quiz