import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { addFeed } from '../utils/FeedSlice'
import Usercards from './Usercards'


const Feed = () => {
  const dispatch=useDispatch();
  const feeds=useSelector(store=>store.feed)
  const getFeed=async()=>{
    if(feeds) return;
     try{
      const feed=await axios.get("http://localhost:7777/user/feeds",{withCredentials:true});
      dispatch(addFeed(feed.data.data))
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    getFeed();
  },[])
  if(!feeds || feeds.length==0) {return <h1 className=' flex justify-center m-auto mt-10 mb-20'>No more persons found</h1> }
  return (
    <div>
        <Usercards feed={feeds?.[0]} />
      
    </div>
  )
}

export default Feed
