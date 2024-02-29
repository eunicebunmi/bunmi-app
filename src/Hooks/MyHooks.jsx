import React, {useState, useEffect} from 'react'

// function based component cannot effectively manage state of data that changes or updates them as they change. Hence, the introduction of react hooks.
// Types of Hooks; 1. useState 2. useEffect 3. useParams 4. useContext 5. useRef 6. custom hooks (this is you customizing your own hooks)

// 1. useState - this is used to update the state of function based components.
// import/destructure useState from react
// it must be used inside the function body.
// must be imported at the top level of your component
// it has three main parts: stateName, function to update the state (i.e setName()) and the useState(initialState)

const MyHooks
 = () => {

    // hook
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState({
        bg: "",
        col: "black"
    })

    // useEffect hook. this takes a callback function
    useEffect(() => {
        console.log("useEffect called")
    })

    // run only once on page load
    useEffect(() => {
        console.log("useEffect called once")
    }, [])

     // useEffect hook as componentDidUpdate
     useEffect(() => {
        if(count === 5){
            setTheme({
                bg: "black",
                col: "white"
            })
        }
    }, [count]) // componentDidUpdate
    // let count = 0;
    const handleIncrease = () => {
        // count + 1;
        setCount(count + 1)
    } 
    const handleDecrease = () => {
        // count - 1;
        setCount(count - 1)
    } 
console.log(count);
console.log(theme);
  return (
    <div style={{backgroundColor: theme.bg, color: theme.col}}>
        <h1>My Hook Component</h1>
        <div className="">
            <button className='btn btn-outline-danger' onClick={handleDecrease}>-</button>
            <span className='mx-4 fw-bold'>{count}</span>
            <button  className='btn btn-outline-success' onClick={handleIncrease}>+</button>

            <p>{theme.col}</p>
            <div className="">
                <button className='btn btn-danger me-4' onClick={()=>setTheme({
                    bg: "red",
                    col: "white"
                })}>Red</button>
                <button className='btn btn-primary' onClick={()=>setTheme({
                    bg: "blue",
                    col: "yellow"
                })}>Blue</button>
            </div>


        </div>
    </div>
  )
}

export default MyHooks