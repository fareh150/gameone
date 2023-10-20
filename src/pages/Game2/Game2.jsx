import {  useEffect, useState } from "react"
import "./Game2.css"
import axios from "axios"

const Game2 = () => {

    const [startGame, setStartGame] = useState(false)
    const [checkPhase, setCheckPhase] = useState(false)
    const [btntoCheck, setBtntocheck] = useState("")

    const [allData, setAllData] = useState([])

    const [correct, setCorrect] = useState(0)
    const [badChoose, setBadChoose] = useState(0)

    const [flagData, setFlagData] = useState({})
    const [optionOne, setOptionOne] = useState({})
    const [optionTwo, setOptionTwo] = useState({})
    const [optionTree, setOptionTree] = useState({})

    const [allOptions, setAllOptions] = useState([])


    const [randomChoiseWin , setRandomChoiseWin] = useState(Math.floor(Math.random() * 250)) 

    const [randomChoiseOptionOne , setRandomChoiseOptionOne] = useState(Math.floor(Math.random() * 250)) 
    const [randomChoiseOptionTwo , setRandomChoiseOptionTwo] = useState(Math.floor(Math.random() * 250)) 
    const [randomChoiseOptionTree , setRandomChoiseOptionTree] = useState(Math.floor(Math.random() * 250)) 

    const [error , setError] = useState(false)

    const getData = async () => {
        setError(false)
        try{
            const data = await axios.get(`https://restcountries.com/v3.1/all`)
            setAllData(data.data)
        } catch (error) {
            setError(true)
        }
        
    }

    const getFlagData = () => {
        setFlagData(allData[randomChoiseWin])
        setOptionOne(allData[randomChoiseOptionOne])
        setOptionTwo(allData[randomChoiseOptionTwo])
        setOptionTree(allData[randomChoiseOptionTree])
    }

    const startThegame = () => {
        setStartGame(true)
        dataForMap()

    }

    const dataForMap = () => {
        setAllOptions([flagData.translations.spa.common , optionOne.translations.spa.common , optionTwo.translations.spa.common , optionTree.translations.spa.common])
    }




    useEffect(() => {
        getData()
    },[])

    useEffect(() => {
        getFlagData()
    })

    const startCheckPhase = (btnclicked) => {
        setCheckPhase(true)
        checkF(btnclicked)
        setBtntocheck(btnclicked)
    }


    const checkF = (btnclicked) => {

        //checkphase poner en tru y empezar a ver las condiciones de si son iguales pintar
        btnclicked == flagData.translations.spa.common
        ? setCorrect(correct + 1)
        :
        setBadChoose(badChoose + 1)
    }

    const nextPhase = () => {
        setCheckPhase(false)
        setRandomChoiseWin(Math.floor(Math.random() * 250))
        setRandomChoiseOptionOne(Math.floor(Math.random() * 250))
        setRandomChoiseOptionTwo(Math.floor(Math.random() * 250))
        setRandomChoiseOptionTree(Math.floor(Math.random() * 250))
    }
    

    return(
        <main className="gametwo">
            <h2 className="title">Flag Game</h2>
            {
                startGame == false
                ? <section className="start">
                    <button onClick={startThegame}>Start Game</button>
                </section>
                :
                <section className="boardbox">
                <div className="points">current rate : {correct}    error:{badChoose}</div>
                <article className="playbox">
                    <div className="flagbox">
                        <img src={flagData.flags.png} alt="country flag" />
                    </div>
                    <div className="countryOptions">
                        {allOptions.sort().map((option) =>(
                             <h3 key={option} onClick={() =>startCheckPhase(option)} className={checkPhase == true && option == flagData.translations.spa.common
                            ? "good"
                            :
                            checkPhase == true && option == btntoCheck
                            ? "bad"
                            :
                            ""
                         }>{option}</h3>
                        ))}
                    </div>
                    <div className="nextbtn">
                        {checkPhase == false ? "" : <div className="btn" onClick={() => nextPhase()}>next</div>}
                        
                    </div>

                </article>
            </section>
            }
            
        </main>
    )
}

export default Game2;

//https://restcountries.com/v3.1/all

