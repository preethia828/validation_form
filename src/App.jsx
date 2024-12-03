import { useState } from 'react';
import './App.css'
import { useNavigate, Routes, Route, Link  } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';


function App() {

  return (
    <>

   
      
       <Routes>
        <Route  element={<Login/>} path="/login" />
       <Route element={<Registration/>} path='/' />
        
      </Routes>
    </>
  )
}

export default App
