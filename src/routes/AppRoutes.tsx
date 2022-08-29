import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignInSide from '../components/Loginx'
import Home from '../pages/Home'
import Homex from '../pages/Homex'


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homex />} />
        <Route path="/login" element={<SignInSide />} />
        
        
      
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
