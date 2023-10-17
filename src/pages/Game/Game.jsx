import { useState } from "react";
import "./Game.css"

const Game1 = () => {
    const [playerTurn, setPlayerTurn] = useState(1)
    const [win, setWin] = useState(false)
    const [draw, setDraw] = useState(true)
    const [winerPlayer, setWinerPlayer] = useState()

    let counter=0

    const [onea, setOnea] = useState("")
    const [oneb, setOneb] = useState("")
    const [onec, setOnec] = useState("")
    const [twoa, setTwoa] = useState("")
    const [twob, setTwob] = useState("")
    const [twoc, setTwoc] = useState("")
    const [treea, setTreea] = useState("")
    const [treeb, setTreeb] = useState("")
    const [treec, setTreec] = useState("")    

    const changeTurn = () => {
        if(win == false){
            playerTurn === 1 ? setPlayerTurn(2) : setPlayerTurn(1)
        }
    }




    return(
        <main className="game">
            <article className="playbox">
                {
                    win !== false 
                    ? <section className="turn"> Player {winnerPlayer} Win</section>
                    : 
                    counter >= 9 
                    ? <section className="turn">Draw</section>
                    : <section className="turn">Player {playerTurn}</section> 
                }
                <section className="biggamebox">
                    <article className="gamebox">
                    {onea == "" && win == false ? <div className="box onea" onClick={() => printBox(setOnea) }>{onea}</div> :
                        <div className="box onea" >{onea}</div>
                    }
                    {oneb == "" && win == false ? <div className="box oneb" onClick={() => printBox(setOneb) }>{oneb}</div> :
                        <div className="box oneb" >{oneb}</div>
                    }
                    {onec == "" && win == false ? <div className="box onec" onClick={() => printBox(setOnec) }>{onec}</div> :
                        <div className="box onec" >{onec}</div>
                    }
                    {twoa == "" && win == false ? <div className="box twoa" onClick={() => printBox(setTwoa) }>{twoa}</div> :
                        <div className="box twoa" >{twoa}</div>
                    }
                    {twob == "" && win == false ? <div className="box twob" onClick={() => printBox(setTwob) }>{twob}</div> :
                        <div className="box twob" >{twob}</div>
                    }
                    {twoc == "" && win == false ? <div className="box twoc" onClick={() => printBox(setTwoc) }>{twoc}</div> :
                        <div className="box twoc" >{twoc}</div>
                    }
                    {treea == "" && win == false ? <div className="box treea" onClick={() => printBox(setTreea) }>{treea}</div> :
                        <div className="box treea" >{treea}</div>
                    }
                    {treeb == "" && win == false ? <div className="box treeb" onClick={() => printBox(setTreeb) }>{treeb}</div> :
                        <div className="box treeb" >{treeb}</div>
                    }
                    {treec == "" && win == false ? <div className="box treec" onClick={() => printBox(setTreec) }>{treec}</div> :
                        <div className="box treec" >{treec}</div>
                    }
                    </article>
                </section>

            </article>
        </main>
    )
}

export default Game1;
