import React from 'react'
import Naver from './component/naver/Naver'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './component/footer/Footer'

function App() {
  return (
    <div>
      <div className='app'>
      <Naver/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
    
    </div>
  )
}

export default App
