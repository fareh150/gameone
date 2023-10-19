import { createContext } from "react";
import { useEffect, useState } from "react"
import axios from "axios"

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    
  const [allData, setAllData] = useState([])

    const getData = async () => {
        const data = await axios.get(`https://restcountries.com/v3.1/all`)
        setAllData(data.data)
    }

    useEffect(() => {
        getData()
    },[])

    return(
        <DataContext.Provider value={{ allData }}>
            {children}
        </DataContext.Provider>
    )
}