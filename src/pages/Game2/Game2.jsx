import { useEffect, useState } from "react"
import "./Game2.css"
import axios from "axios"

const Game2 = () => {


    return(
        <main className="gametwo">
            <h2 className="title">Country Game</h2>
            <section className="boardbox">
                <div className="points">current rate : 0</div>
                <article className="playbox"></article>
            </section>
        </main>
    )
}

export default Game2;

//https://restcountries.com/v3.1/all

