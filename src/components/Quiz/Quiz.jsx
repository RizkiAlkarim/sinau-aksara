import { useState } from "react"
import hanacaraka from "../../data/hanacaraka.js"
import style from "./quiz.module.css"

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
            console.log("jawaban kamu salah")
        }
    }

    function passButton(){
        setRandomAksara()
    }

  return (
    <div className={style.container}>
        <div className={style.question}>
            <h1 className={style.letter}>{hanacaraka[current].aksara}</h1>
        </div>
        <div className={style["answer-container"]}>
            <form className={style.answer} onSubmit={submitAnswer}>
                <input 
                    className={style["answer-box"]}
                    type="text"
                    value={input}
                    maxLength={3}
                    onChange={handleChange}
                />
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