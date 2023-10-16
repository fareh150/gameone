import { useState } from "react";
import "./Game.css"

const Game = () => {
//hacer use state para ganador true or false
//un usestate para el usuario ganador  para que no se cambie todo el rato
    const [playerTurn, setPlayerTurn] = useState("1")
    const [gameStatus, setGameStatus] = useState("Draw")
    let counter = 0

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

    const printBox = (setbox) => {
        playerTurn == "1" ? setbox("X") : setbox("O");
        counter= counter + 1;
        checkwin();
        ChangeTurn();
    }

    const checkwin = () => {
        onea == oneb && oneb == onec && onea != ""
        ? setGameStatus(`${playerTurn} win the game`) 
        :
        twoa == twob && twob == twoc && twoa != ""
        ? setGameStatus(`${playerTurn} win the game`)
        :
        treea == treeb && treeb == treec && treea != ""
        ? setGameStatus(`${playerTurn} win the game`)
        :
        onea == twoa && twoa == treea && onea != ""
        ? setGameStatus(`${playerTurn} win the game`)
        :
        oneb == twob && twob == treeb && oneb != ""
        ? setGameStatus(`${playerTurn} win the game`)
        :
        onec == twoc && twoc == treec && onec != ""
        ? setGameStatus(`${playerTurn} win the game`)
        :
        onea == twob && twob == treec && onea != ""
        ? setGameStatus(`${playerTurn} win the game`)
        :
        onec == twob && twob == treea && onec != ""
        ? setGameStatus(`${playerTurn} win the game`)
        :  setGameStatus(`Draw`)
    }
 


    return(
        <main className="game">
            <article className="playbox">
                { counter == 9 
                ?  <section className="turn">{gameStatus}</section>
                :
                gameStatus == "Draw"
                ?  <section className="turn">player {playerTurn}</section>
                :  <section className="turn">{gameStatus}</section>
                }
                
                <section className="biggamebox">
                <article className="gamebox">
                    {onea == "" ? <div className="box onea" onClick={() => printBox(setOnea) }>{onea}</div> :
                        <div className="box onea" >{onea}</div>
                    }
                    {oneb == "" ? <div className="box oneb" onClick={() => printBox(setOneb) }>{oneb}</div> :
                        <div className="box oneb" >{oneb}</div>
                    }
                    {onec == "" ? <div className="box onec" onClick={() => printBox(setOnec) }>{onec}</div> :
                        <div className="box onec" >{onec}</div>
                    }
                    {twoa == "" ? <div className="box twoa" onClick={() => printBox(setTwoa) }>{twoa}</div> :
                        <div className="box twoa" >{twoa}</div>
                    }
                    {twob == "" ? <div className="box twob" onClick={() => printBox(setTwob) }>{twob}</div> :
                        <div className="box twob" >{twob}</div>
                    }
                    {twoc == "" ? <div className="box twoc" onClick={() => printBox(setTwoc) }>{twoc}</div> :
                        <div className="box twoc" >{twoc}</div>
                    }
                    {treea == "" ? <div className="box treea" onClick={() => printBox(setTreea) }>{treea}</div> :
                        <div className="box treea" >{treea}</div>
                    }
                    {treeb == "" ? <div className="box treeb" onClick={() => printBox(setTreeb) }>{treeb}</div> :
                        <div className="box treeb" >{treeb}</div>
                    }
                    {treec == "" ? <div className="box treec" onClick={() => printBox(setTreec) }>{treec}</div> :
                        <div className="box treec" >{treec}</div>
                    }
                </article>
            </section>
            </article>
            
        </main>
    )
}

export default Game;

//display: grid;
   // grid-template-columns: repeat(2,1fr);