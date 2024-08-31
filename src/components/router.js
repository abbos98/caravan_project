import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Motorjon from './motor/motorjon'
import Detail from './motor/detail'
import NotFoundComponent from './404NT/NotFound'
import Caravan from './caravan/caravan'
import Tuning from './tuning/tuning'
import UsedCar from './usedCar/usedCar'
import CampingPlace from './campingPlace/campingPlace'

const RouterComponenets = () => {
  return (
    <Routes>
        <Route path = {"/motor"} element = {<Motorjon />} />
        <Route path = "/motor/:id" element={<Detail />} />
        <Route path = {"/caravan"} element = {<Caravan />} />
        <Route path = {"/tuning"} element = {<Tuning />} />
        <Route path = {"/usedcar"} element = {<UsedCar />} />
        <Route path = {"camping place"} element = {<CampingPlace />} />
        <Route path = "*" element={<NotFoundComponent />} />
    </Routes>
  )
}

export default RouterComponenets