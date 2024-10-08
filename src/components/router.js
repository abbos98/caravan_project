import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Motorjon from './motor/motorjon'
import Detail from './motor/detail'
import NotFoundComponent from './404NT/NotFound'
import Caravan from './caravan/caravan'
import Tuning from './tuning/tuning'
import UsedCar from './usedCar/usedCar'
import CampingPlace from './campingPlace/campingPlace'
import LoginComponent from './authentication/login'
import Navbar from '../context/navbar'
import RegisterComponent from './authentication/register'
import Footer from '../context/footer'
import CaruselComponent from './carusel/carusel'
import CampingInside from './campingPlace/campingDetailsIn/campingInside'
import AddCart from './motor/afterAddCart/addCart'
import CompareComponents from './compare_button'
import AccordionUsage from './acardion'
import TemporaryDrawer from './dropDown/right_dropDown'
import NavbarDropDownComponent from './dropDown/navbar_DropDown'




const RouterComponenets = () => {
  const location = useLocation();
  const navbarContainer = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
    {!navbarContainer && <Navbar />}
   

    <Routes>
        <Route path = {"/motor"} element = {<Motorjon />} />
        <Route path = "/motor/:id" element={<Detail />} />
        <Route path = {"/caravan"} element = {<Caravan />} />
        <Route path = {"/tuning"} element = {<Tuning />} />
        <Route path = {"/usedcar"} element = {<UsedCar />} />
        <Route path = {"/camping place"} element = {<CampingPlace />} />
        <Route path = "*" element={<NotFoundComponent />} />
        <Route path = "/login" element={<LoginComponent />} />
        <Route path = "/register" element={<RegisterComponent />} />
        <Route path = "/createaccount" element={<Motorjon />} /> 
        <Route path = "/" element={<CaruselComponent />} /> 
        <Route path = "campingDetailsIn" element={<CampingInside />} />
        <Route path = "/addCart" element={<AddCart />} />
        <Route path = "/Cart" element={<AccordionUsage />} />
        <Route path = "/compare_button" element={<CompareComponents />} />
{/* 
         <Route path = "abs" element={<BasicTabs />} /> */}
 <Route path = "/abbos" element={<TemporaryDrawer />} />


 
 
      

 


  


        
      
       
    </Routes>

    {!navbarContainer && <Footer />}
   </>
  );
};

export default RouterComponenets;