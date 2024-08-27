import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Motorjon from './motor/motorjon'
import Detail from './motor/detail'

const RouterComponenets = () => {
  return (
    <Routes>
        <Route path = {"/motor"} element = {<Motorjon />} />
        <Route path = "/motor/:id" element={<Detail />} />
    </Routes>
  )
}

export default RouterComponenets