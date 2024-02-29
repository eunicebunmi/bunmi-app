import img1 from "../assets/images/download.jpeg"
// import Spimmer from "../components/Loader"
import Bolt from "../components/Nav"
import Hero from "../components/Hero"
import "../css/Home.css"
import "../css/About.css"
import img3 from  "../assets/images/download (1).jpeg"
import ProductCard from "../components/ProductCard"
import Products from "./Products"
function Home(){
    return ( 
    <>
    {/* <Bolt/> */}
    {/* <Spimmer/> */}
    <Hero heading= "Welcome to Home page" image={img3} />
    {/* <ProductCard/> */}
    {/* <Products/> */}
    {/* <h1 className="bg-danger text-light">Welcome to homepage</h1> */}
    <div className="">
        <img src={img1} alt="" width={250} height={250}/>
    </div>
    </>
    )
}
export default Home;