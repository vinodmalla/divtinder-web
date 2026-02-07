import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addConnections } from '../utils/ConnectionsSlice'
import { useSelector } from 'react-redux'
import { BASE_URL } from '../utils/Connection'

const Connections = () => {
    const dispatch=useDispatch();
    const connections=useSelector(store=>store.connections);
    const getConnections=async()=>{
        try{
            const res=await axios.get(BASE_URL+"/user/connections",{withCredentials:true});
           dispatch(addConnections(res.data.data));
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getConnections();
    },[])
    if(!connections) return;
    if(connections.length==0) return <h1>Connections Not Found</h1>
  return (
    <div className=' flex flex-col items-center '>
        <h1 className='font-extrabold text-2xl '>Connections</h1>
        {
            connections.map((connection)=>{
                const {firstName,lastName,age,gender,about,photourl}=connection;
                return(
                    <div key={firstName} className="card bg-base-300 w-96 mt-12 mb-5 my-2 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={photourl}
      alt={firstName}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{firstName} {lastName}</h2>
    <p>{ gender &&age &&     gender.charAt(0).toUpperCase() + gender.slice(1) + ","+age}</p>
    <p> {about}</p>
 
  </div>
</div>
                )
            })
        }
      
    </div>
  )
}

export default Connections
