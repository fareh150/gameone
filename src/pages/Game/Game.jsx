import { useState } from "react";
import "./Game.css"

const Game = () => {

    const [playerTurn, setPlayerTurn] = useState("1")

    const [onea, setOnea] = useState("")
    const [oneb, setOneb] = useState("")
    const [onec, setOnec] = useState("")
    const [twoa, setTwoa] = useState("")
    const [twob, setTwob] = useState("")
    const [twoc, setTwoc] = useState("")
    const [treea, setTreea] = useState("")
    const [treeb, setTreeb] = useState("")
    const [treec, setTreec] = useState("")



    const ChangeTurn = () => {
        playerTurn == 1 ? setPlayerTurn("2"): setPlayerTurn("1");
    }


    return(
        <main className="game">
            <article className="playbox">
                <section className="turn">player {playerTurn}</section>
                <section className="biggamebox">
                <article className="gamebox">

                    <div className="box onea" onClick={ChangeTurn}>{onea}</div>
                    <div className="box oneb" onClick={ChangeTurn}>{oneb}</div>
                    <div className="box onec" onClick={ChangeTurn}>{onec}</div>
                    <div className="box twoa" onClick={ChangeTurn}>{twoa}</div>
                    <div className="box twob" onClick={ChangeTurn}>{twob}</div>
                    <div className="box twoc" onClick={ChangeTurn}>{twoc}</div>
                    <div className="box treea" onClick={ChangeTurn}>{treea}</div>
                    <div className="box treeb" onClick={ChangeTurn}>{treeb}</div>
                    <div className="box treec" onClick={ChangeTurn}>{treec}</div>
                </article>
            </section>
            </article>
            
        </main>
    )
}

export default Game;

//display: grid;
   // grid-template-columns: repeat(2,1fr);