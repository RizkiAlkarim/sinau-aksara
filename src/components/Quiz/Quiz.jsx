import { useState } from "react"
import { useForm } from "react-hook-form"
import hanacaraka from "../../data/aksara.js"
import style from "./quiz.module.css"

function Quiz() {
    const [letter, setLetter] = useState(hanacaraka.aksara[Math.floor(Math.random() * hanacaraka.aksara.length)])
    const [tempLetter, setTempLetter] = useState("")

    const randomIndex = Math.floor(Math.random() * hanacaraka.aksara.length)
    const aksara = hanacaraka.aksara[randomIndex]

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    function changeQuestion(){
        setTempLetter(letter)
        setLetter(aksara)
        if(tempLetter == letter){
            setLetter(aksara)
        }
    }

    function submitButton(){
        //if(answer == question){}
        changeQuestion()
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
            <form className={style.answer} action="">
                <input className={style["answer-box"]} type="text" maxLength={1}/>
                <input className={style["answer-box"]} type="text" maxLength={1}/>
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
                onClick = {submitButton}
            >
            submit
            </button>
        </div>
    </div>
  )
}

export default Quiz