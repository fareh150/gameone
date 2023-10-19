import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DataContextProvider } from './context/apidata'
import Home from './pages/Home/Home.jsx'
import Game from './pages/Game/Game.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import Game2 from './pages/Game2/Game2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
    <DataContextProvider>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/game' element={<Game />} />
          <Route path='/game2' element={<Game2 />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </DataContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
