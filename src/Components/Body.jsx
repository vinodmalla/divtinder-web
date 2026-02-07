import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'
import axios from 'axios';
import { useEffect } from 'react';
import { addUser } from '../utils/userSlice.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../utils/Connection.js';



const Body = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  
  const fetchUser=async()=>{
    if(!user) return navigate('/login') ;
  try{
    const res=await axios.get(BASE_URL+"/profile/view",{
      withCredentials:true
    })
    dispatch(addUser(res.data));
  }
  catch(err){
    if(err.response.status===401){
      return navigate('/login');
    }
    console.log(err);
  }
}

useEffect(()=>{
if(!user){
  fetchUser();
}
  
},[]);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer/>

      
    </>
  )
}

export default Body
