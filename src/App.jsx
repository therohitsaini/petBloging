import { useState } from 'react'
import './App.css'
import Navbar from './Components/NavComp/Navbar'
import Home from './Components/Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route  path='/'element={ <Home />} />
    <Route  path='/about'/>
    {/* <Route  path='service' element={ } /> */}
    <Route  path='/accessories'/>

   </Routes>
   </BrowserRouter>
   
    
    </>
  )
}

export default App
