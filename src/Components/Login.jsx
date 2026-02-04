import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName,setFirstName]=useState("");
    const [lastName,setlastName]=useState("");
    const [IsLogin,setIsLogin]=useState(true);
    const [loginErr,setloginErr]=useState("");
    const [signErr,setsignErr]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handlelogin=async()=>{
        try{const res=await axios.post("http://localhost:7777/login",{email,password},{withCredentials:true})
        dispatch(addUser(res.data)) 
        return  navigate('/')    
    }
    catch(err){
        console.log(err);
        setloginErr(err.message)
    }
    }
    const handleSignup=async()=>{
      try{
        const res=await axios.post("http://localhost:7777/signup",{firstName,lastName,email,password},{withCredentials:true});
        dispatch(addUser(res.data))
        navigate("/profile")
      }
      catch(err){
        signErr(err.message)
      }
    }
  return (
    <div className="flex justify-center">
      <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-96 border mt-6 p-10">
  
  <h1 className="text-center text-xl font-medium">{IsLogin ? "SignUp" : "LogIn"}</h1>
  {IsLogin && <>
    <label className="label">First Name</label>
  <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="input" placeholder="Email" />

  <label className="label">Last Name</label>
  <input type="text" value={lastName} onChange={(e)=>setlastName(e.target.value)} className="input" placeholder="Password" />

  </> }

  <label className="label">Email</label>
  <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="Password" />
   <p className='text-red-500'>{IsLogin ? signErr : loginErr}</p>
  <button className="btn btn-neutral  bg-blue-500 mt-4" onClick={IsLogin ? handleSignup :handlelogin}>{IsLogin ? "SignUp" : "LogIn"}</button>
  <p className='m-auto' onClick={()=>setIsLogin(value=>!value)}>{IsLogin ? "Existing user? Login here" : "New user? Sign up here"}
</p>
</fieldset>
    </div>
  )
}

export default Login
