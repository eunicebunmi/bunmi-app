import Hero from "../components/Hero"
import Spimmer from "../components/Loader"
import Bolt from "../components/Nav"
import img2 from "../assets/images/Women Ombre Summer Elegant No Elasticity Long sleeve Crew Neck Regular A-Line Ultra lightweight Shirts.jpeg"

function About() {
    // jsx (javascript)
    const myJsx = <h3>This is awesome JSX</h3>
    const myFavFood = <ul>
    <li>rice</li>
    <li>beans</li>
    <li>coke</li>
    <li>plantain</li>
    </ul>
  const food = ["amala", "tuwo", "jollof", "spaghetti"]
    return (
      <>
      <Bolt/>
      <Spimmer/>
      <Hero heading= " Welcome to About page" image={img2}/>
        <div>
          <h1>Welcome to my TECH App 1.0</h1>
          {myJsx}
          {myFavFood}
        </div>
         {/* map through food array */}
         <h3>My favourite food</h3>
        {food.map((f, index)=>{
          return (
            <div className="" key={index}>
            <p>My favourite food is {f}</p>
          </div>
          )
        })}
      </>
    )
  }
  
  export default About

  // u need wrapper if u hav more than one terms