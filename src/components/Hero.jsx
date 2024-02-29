import React from 'react'
import hero from "../assets/images/Women Ombre Summer Elegant No Elasticity Long sleeve Crew Neck Regular A-Line Ultra lightweight Shirts.jpeg"
export const Hero = (props) => {
    const {heading, image} = props
  return (
    <div style={{backgroundColor:'green', color: 'yellow'}}>
        <div className="">
            <img src={image} alt=""  height= "300px" width={300}/>
            {/* <h1>Welcome to my page</h1> */}
            <h1>{heading}</h1>
        </div>
    </div>
  )
}

export default Hero