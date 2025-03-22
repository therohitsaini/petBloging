import { useState } from 'react'
import './App.css'
import Navbar from './Components/NavComp/Navbar'
import Home from './Components/Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormComp from './Components/FormComp/FormComp';
import ForgetPassword from './Components/FormComp/ForgetPassword';
import AddnewPassword from './Components/FormComp/AddnewPasswoed';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FormComp />} />
          <Route path='/forgetpassword' element={ <ForgetPassword />} />
          <Route path='/addnewpassword' element={ <AddnewPassword />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' />
          <Route path='/accessories' />
   


        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
