import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removeFeed } from '../utils/FeedSlice'
import { useSwipeable } from 'react-swipeable'

const Usercards = (data) => {
  const dispatch=useDispatch()
  
  const reviewFeed=async(status,_id)=>{
    try{
      const res=await axios.post("http://localhost:7777/request/"+status+"/"+_id,{},{withCredentials:true})
      dispatch(removeFeed(_id))
    }catch(err){
      console.log(err)
    }
  }
  const handlers=useSwipeable({
    onSwipedRight:()=>{
      reviewFeed("Interested",data?.feed?._id)
    },
    onSwipedLeft:()=>{
      reviewFeed("Ignored",data?.feed?._id)
    },
    preventScrollOnSwipe:true,
    trackMouse:true
  })

  
   
  return (
   <div className="card  bg-base-300 mt-10 w-96 m-auto h-1/2 mb-8 shadow-sm" {...handlers}>
  <figure>
    <img
      src={data?.feed?.photourl}
      alt="Movie" />
  </figure>
  <div className="card-body m-auto my-4">
    <h2 className="card-title  font-medium text-2xl">  {data?.feed?.firstName} {data?.feed?.lastName}</h2>
    <p className='text-lg'>{data?.feed?.about}</p>
    <p className='text-lg' >{data?.feed?.age} {data?.feed?.gender}</p>
    <div className="card-actions justify-between">
      <button className="btn btn-secondary" onClick={()=>reviewFeed("Ignored",data?.feed?._id)}>Ignore</button>
      <button className="btn btn-primary" onClick={()=>reviewFeed("Interested",data?.feed?._id)}>Interest</button>
    </div>
  </div>
</div>
  )
}

export default Usercards
