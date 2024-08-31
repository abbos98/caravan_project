import React from 'react';
import notFound from "../../assets/NT.png";

const NotFoundComponent = () => {
  return (
    <div><img style = {{width:"100%", height: "100vh"}} src={notFound} alt='NotFound'/></div>
  )
}

export default NotFoundComponent;
