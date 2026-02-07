import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addRequest } from '../utils/RequestSlice';
import { useSelector } from 'react-redux';
import { removeRequest } from '../utils/RequestSlice';

const Request = () => {
    const dispatch=useDispatch();
    const requests=useSelector(store=>store.requests);
    const reviewRequest=async(status,_id)=>{
        try{
            const res=await axios.post("http://localhost:7777/request/review/"+status+"/"+_id,{},{withCredentials:true});
            dispatch(removeRequest(_id))

        }
        catch(err){
            console.log(err)
        }
    }
    const fetchRequests=async()=>{
        try{
            const res=await axios.get("http://localhost:7777/user/requests/received",{withCredentials:true});
            dispatch(addRequest(res.data.data))
        }
        catch(err){
            console.log(err)
        }
    }
    
    useEffect(()=>{ 
        fetchRequests();
    },[]);
    
    if(!requests) return;
    if(requests.length===0) return <h1 className='flex justify-center mt-10 mb-10'>Request not found</h1>
    
  return (
    <div className=' flex flex-col justify-between items-center mt-4'>
        <h1 className='font-extrabold text-2xl '>Requests</h1>
        {
            requests.map((request)=>{
                const {_id,firstName,lastName,age,gender,about,photourl}=request.fromuserId;
                return(
                    <div key={_id} className="card bg-base-300 w-96 h-96 mt-12 mb-5 my-2 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={photourl}
      alt={firstName}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{firstName} {lastName}</h2>
    <p>{age && gender && gender + ","+age}</p>
    <p> {about}</p>
    <div className='flex mt-2'>
        <button className="btn btn-soft btn-secondary ml-4" onClick={()=>reviewRequest("Rejected",request._id)}>Reject</button>
<button className="btn btn-soft btn-accent ml-4" onClick={()=>reviewRequest("Accepted",request._id)}>Accept</button>
        </div>
 
  </div>
</div>
                )
            })
        }
      
    </div>
  )
}

export default Request
