import React from 'react'
import { Button } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const DetailCard = ({product}) => {
  return (
    <div className="row" style={{height: "20rem"}}>
<div className="col-12 col-md-6" style={{height:"20rem"}}>
    <img src={product?.image} alt="" width="100%"/>
</div>
<div className="col-12 col-md-6" style={{justifyContent:"center", alignItems:"center", display:"flex", flexDirection:"column", height:"20rem"}}>
    <h3>{product?.title}</h3>
    <p>{product?.desc}</p>
    <p>{product?.price}</p>
    <Button>
    <NavLink to="/product" style={{textDecoration: "none", color: "white"}}>
        Go Back
    </NavLink>
</Button> 
</div>

</div>
  )
}

export default DetailCard