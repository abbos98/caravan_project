import React from 'react'
import { campcar } from '../../mock/motorDetail';
import { NavLink } from 'react-router-dom';

const Vmenu = () => {
 const data = campcar.maindata;
 console.log(data);
 
    return (
    <div>
        {data.map((value, index) => {
            return (
                <div key={index}>
                    <NavLink to={`/motor/${value.id}`}
                    style= {{textDecoration: "none", color: "black"}}>
                      <div>
                      
                        <img src={value.car.img} alt='car_image'/>
                        <div>
                            <h3>{value.car.CarName}</h3>
                            <h2>{value.car.Cost}</h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus recusandae soluta quibusdam molestiae magni distinctio esse voluptatibus nulla tempore vero, laboriosam repellendus dignissimos error et a at. Veritatis, aspernatur.
                        </div>

                        <div>
                            <h5></h5>
                            <div>
                               <img />
                               <p>5.3</p>
                            </div>
                        </div>

                        <div>
                          <button>Order</button>
                          <button>Campere</button>
                        </div>
                      </div>
                    </NavLink>

                </div>
            )
        })}
    </div>
  )
}

export default Vmenu;