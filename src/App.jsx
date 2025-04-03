import { useState } from 'react'
import './App.css'
import Navbar from './Components/NavComp/Navbar'
import Home from './Components/Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import FormComp from './Components/FormComp/FormComp';
import ForgetPassword from './Components/FormComp/ForgetPassword';
import AddnewPassword from './Components/FormComp/AddnewPasswoed';
import Login from './Components/FormComp/SignIn';
import PetDetails from './Components/Pages/PetDetails';
import SignUp from './Components/FormComp/SignUp';
import SignIn from './Components/FormComp/SignIn';
import PetFinding from './Components/Pages/PetFinding';
import ShowMoreDetails from './ShowMoreDetails/ShowMoreDetails';
import Blog from './Components/Pages/Blog';
import BlogDetails from './Components/Pages/BlogDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          {/* <Route path='/formcomp' element={<FormComp/>} /> */}


          <Route path='/forgetpassword' element={ <ForgetPassword />} />
          <Route path='/addnewpassword' element={ <AddnewPassword />} />
          <Route path='/login' element={ <Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/about' />
          <Route path='/accessories' />
          <Route path='/petdetails' element={<PetDetails  />} />
          <Route path='/petfinding' element={<PetFinding  />} />
          <Route path='/showmoredetails' element={<ShowMoreDetails  />} />
          <Route path='/blogdetails' element={<BlogDetails  />} />




   


        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
