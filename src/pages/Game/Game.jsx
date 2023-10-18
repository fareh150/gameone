import { useEffect, useState } from "react";
import "./Game.css"

const Game1 = () => {
    const [playerTurn, setPlayerTurn] = useState(2)
    const [win, setWin] = useState(false)
    const [draw, setDraw] = useState(true)
    const [winerPlayer, setWinerPlayer] = useState()

    const [counter, setCounter] = useState(0)

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
        setWinerPlayer(playerTurn)
        if(win == false){
            playerTurn === 1 ? setPlayerTurn(2) : setPlayerTurn(1)
        }
        setCounter(counter+1)
    }

    const resetbtn = () => {
        setOnea("")
        setOneb("")
        setOnec("")
        setTwoa("")
        setTwob("")
        setTwoc("")
        setTreea("")
        setTreeb("")
        setTreec("")
        setWin(false)
        setDraw(true)
        setPlayerTurn(2)
        setCounter(0)
    }

    const play = () => {
        setWin(true)
        setDraw(false)
    }

    const printBox = (setbox) => {
        playerTurn == 1 ? setbox("X") : setbox("O");
    }

    const checkwin = () => {
        onea == oneb && oneb == onec && onea != ""
        ? play()
        :
        twoa == twob && twob == twoc && twoa != ""
        ? play()
        :
        treea == treeb && treeb == treec && treea != ""
        ? play()
        :
        onea == twoa && twoa == treea && onea != ""
        ? play()
        :
        oneb == twob && twob == treeb && oneb != ""
        ? play()
        :
        onec == twoc && twoc == treec && onec != ""
        ? play()
        :
        onea == twob && twob == treec && onea != ""
        ? play()
        :
        onec == twob && twob == treea && onec != ""
        ? play()
        :  setDraw(true)
    }

    useEffect(() => {
        checkwin();
        changeTurn()
    }, [onea , oneb , onec , twoa , twob , twoc , treea , treeb , treec])

    return(
        <main className="game">
            <article className="playbox">
                {
                    win !== false 
                    ? <div className="boxbtns"><section className="turn"> Player {winerPlayer} Win</section>
                        <section className="turn rstbtn" onClick={resetbtn}>Reset</section></div>
                    : 
                    counter >= 10 
                    ? <div className="boxbtns">
                        <section className="turn">Draw</section>
                        <section className="turn rstbtn" onClick={resetbtn}>Reset</section>
                    </div>
                    
                    : <section className="turn">Player {playerTurn}</section> 
                }
                <section className="biggamebox">
                    <article className="gamebox">
                    {onea == "" && win == false ? <div className="box onea" onClick={() => printBox(setOnea) }>{onea}</div> :
                        <div className="box onea" >{onea}</div>
                    }
                    {oneb == "" && win == false 
                    ? <div className="box oneb" onClick={() => printBox(setOneb) }>{oneb}</div> 
                    :
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
