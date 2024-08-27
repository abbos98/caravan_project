import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Motorjon from './motor/motorjon'

const RouterComponenets = () => {
  return (
    <Routes>
        <Route path = {"/motor"} element = {<Motorjon />} />
        
    </Routes>
  )
}

export default RouterComponenets