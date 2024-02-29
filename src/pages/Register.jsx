import React, {useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Loader from "../components/Loader";

const Register = () => {

    // create some hooks
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        // api url
        const url = "https://blogg-api-v1.onrender.com/register"

        // validation
    if (!username || !email || !password) {
      console.log("Enter all fields");
      return toast.error("Enter all fields");
    }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if(!emailRegex.test(email)){
      return toast.error("invalid email address"); 
    }

    // Username validation
    const userNameTrim = username.trim();
    if(!username || userNameTrim.length < 3){
      return toast.error("username must be 3 characters and above");
    }

    // password validation
    const pwdTrim = password.trim();
    if(!password || pwdTrim.length < 6){
      return toast.error("Enter a valid password");
    }

    try {
      setLoading(true);
      const response = await axios.get(url);
      const data = await response?.data;

      // console.log(data?.blogs);
      if (data) {
        setBlogs(data?.blogs);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }

    try {
        // sending form data to server
      const { data } = await axios.post(url, {
        username,
        email,
        password,
      });

      // check for successful registration
      if(!data?.error){
        toast.success("Registration successful")
        // redirect user to login
        setTimeout(()=>{
            navigate("/login")
        }, 5000)
      }else{
        toast.error("Registration failed")
      }
    } catch (err) {
      console.log(err);
      const { error } = err?.response?.data
      toast.error(error)
    }
  };

  console.log(username);
  return (
    <div>
    
      <ToastContainer />
      <h1>Register Page</h1>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="">
          <input
            className="form-control p-3"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="">
          <input
            className="form-control p-3 my-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="password-input-wrapper">      
         <input
            className="form-control p-3"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <FaRegEye className="icon"/>
            ) : (
              <FaRegEyeSlash className="icon" />
            )}
          </span>
        </div>
        {loading ? (
        <Loader/>
      ) : (

        <button
          className="btn  btn-primary my-3 p-3 w-100"
          onClick={handleSubmit}
        >
          Submit
        </button>
        )}
      </form>
    </div>
  );
};

export default Register;


// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   // hooks
//   const [username, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // api url
//     const url = "https://blogg-api-v1.onrender.com/register";

//     // validation
//     if (!username || !email || !password) {
//       console.log("Enter all fields");
//       return toast.error("Enter all fields");
//     }

//     // Email validation
//     const emailRegex = /\S+@\S+\.\S+/;
//     if(!emailRegex.test(email)){
//       return toast.error("invalid email address"); 
//     }

//     // Username validation
//     const userNameTrim = username.trim();
//     if(!username || userNameTrim.length < 3){
//       return toast.error("username must be 3 characters and above");
//     }

//     // Username validation
//     const pwdTrim = password.trim();
//     if(!password || pwdTrim.length < 6){
//       return toast.error("Enter a valid password");
//     }

//     try {
//         // sending form data to server
//       const { data } = await axios.post(url, {
//         username,
//         email,
//         password,
//       });

//       // check for successful registration
//       if(!data?.error){
//         toast.success("Registration successful")
//         // redirect user to login
//         setTimeout(()=>{
//             navigate("/login")
//         }, 5000)
//       }else{
//         toast.error("Registration failed")
//       }
//     } catch (err) {
//       console.log(err);
//       const { error } = err?.response?.data
//       toast.error(error)
//     }
//   };

//   console.log(username);
//   return (
//     <div>
//       <ToastContainer />
//       <h1>Register Page</h1>
//       {/* Form */}
//       <form onSubmit={handleSubmit}>
//         <div className="">
//           <input
//             className="form-control p-3"
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => {
//               setUserName(e.target.value);
//             }}
//           />
//         </div>
//         <div className="">
//           <input
//             className="form-control p-3 my-3"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//         </div>
//         <div className="">
//           <input
//             className="form-control p-3"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           />
//         </div>

//         <button
//           className="btn  btn-primary my-3 p-3 w-100"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;