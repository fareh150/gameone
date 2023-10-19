import { useContext, useEffect, useState } from "react"
import "./Game2.css"
import { DataContext } from "../../context/apidata"

const Game2 = () => {

    const {allData} = useContext(DataContext)

    const [flagData, setFlagData] = useState({})

    const [randomChoise , setRandomChoise] = useState(Math.floor(Math.random() * 250)) 

    
    const getFlagData = () => {
        setFlagData(allData)
    }





    useEffect(() => {
        getFlagData()

        console.log(flagData)
    },[])

    return(
        <main className="gametwo">
            <h2 className="title">Flag Game</h2>
            <section className="boardbox">
                <div className="points">current rate : 0</div>
                <article className="playbox">
                    <div className="flagbox">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/2560px-Flag_of_Peru_%28state%29.svg.png" alt="sa" />
                    </div>
                    <div className="countryOptions">
                        <h3>Paris</h3>
                        <h3>Canada</h3>
                        <h3>Peru</h3>
                        <h3>Uganda</h3>
                    </div>
                    <div className="nextbtn">
                        <div className="btn">next</div>
                    </div>

                </article>
            </section>
        </main>
    )
}

export default Game2;

//https://restcountries.com/v3.1/all

