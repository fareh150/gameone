
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {

  const [allData, setAllData] = useState([])


  const getData = async () => {
      const data = await axios.get(`https://restcountries.com/v3.1/all`)
      console.log(data.data)
  }

  useEffect(() => {
      getData()
  },[])

  return (
    <>
      <Header title ="ToDoGames"/>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
