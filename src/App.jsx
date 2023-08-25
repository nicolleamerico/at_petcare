import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import VLibras from '@djpfs/react-vlibras'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './components/home'
import Sobre from './components/Sobre';
import Tecno from './components/tecno';

function App() {
  return (
    <>
    <VLibras forceOnload={true}/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/tecno" element={<Tecno/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
