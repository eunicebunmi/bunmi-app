import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Products from './pages/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import DetailPage from './pages/DetailPage'
import MyHooks from './Hooks/MyHooks'
import Login from './pages/Login'
import Register from './pages/Register'
import PageNotFound from './pages/404Page'
import Loader from './components/Loader'
import Blogs from "./Hooks/FetchData"

function App() {
  return (
    <>
    {/* <Home/> */}
    {/* <About/> */}

     {/* {routing pages} */}
     <BrowserRouter>
     {/* <Bolt/> */}
      <Routes>
       <Route path="/" element = {<Home/>}/>
       <Route path="/about" element = {<About/>}/>
       <Route path="/product" element = {<Products/>}/>
       <Route path="/product/:id" element = {<DetailPage/>}/>
       <Route path='/hook' element={<MyHooks/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
        <Route path = '/Loader' element={<Loader/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
// react folder structure
// creating a react component 
// react compiles all the page down to html.

// import Home from './Pages/Home'
// import About from './Pages/About'
// import './App.css'
// import Products from './Pages/Products'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navs from "./components/Nav";
// import DetailPage from './Pages/DetailPage';
// import MyHook from './hooks/MyHook';
// import Blogs from './hooks/FetchData'
// import PageNotFound from './Pages/404Page'
// import Login from './Pages/Login'
// import Register from './Pages/Register';
// import Loader from './components/Loader';



// function App() {
//   // const [count, setCount] = useState(0)

    

//   // always write your javascript before this return
//   return (
//     <>
//     {/* <Home/>
//     <About/>
//     <Products/> */}
    
//     {/* Routing pages */}
//     <BrowserRouter>
//     <Navs/>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/product" element={<Products/>}/>
//         <Route path="/detail/:id" element={<DetailPage/>}/>
       
//       </Routes>
//     </BrowserRouter>
//     </>

//   )
// }

// export default App