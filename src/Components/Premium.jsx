import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/Connection'

function Premium() {
  const handlePremium=async(type)=>{
  
    try{
      const order=await axios.post(BASE_URL+"/create/order",{ membershipType:type},{withCredentials:true})
       const {amount,currency,notes,orderId}=order.data;
       console.log(order)
        const options = {
           key: "rzp_test_SEtreWIKXmNZPr",
           amount,
           currency,
            name: 'Div Tinder',
            description: 'Test Transaction',
             orderId,
        
        prefill: {
          name: notes.firstName+ " "+notes.lastName,
          emai:notes.email,
          membershipType:notes.membershipType,
        
        },
        theme: {
          color: '#F37254'
        },
      };

       const rzp = new window.Razorpay(options);
      rzp.open();
    }
    catch(err){
      console.log(err)
    }


  }
  return (
    <div className='mt-10 mb-10'>
    <div className="flex w-1/2 m-auto">
  <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
    <h1 className='font-bold bg-clip-text text-transparent  text-4xl bg-gradient-to-r from-amber-100 via-red-400 to-blue-300'>Sliver Premium</h1>
    <li>Sent 100 requests per day
    </li>
    <li>
        Get Blue Tick
    </li>
    <li>
        Chat with unlimated people
    </li>
    <button onClick={()=>handlePremium("Sliver")}   className='btn btn-primary text-lg'>Buy Sliver</button>
    </div>
  
  <div className="divider divider-horizontal">OR</div>
  <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
     <h1 className='font-bold bg-clip-text text-transparent  text-4xl bg-gradient-to-r from-yellow-400 via-red-200 to-yellow-300-300'>Gold Premium</h1>
    <li>Sent 1000 requests per day
    </li>
    <li>
        Get Blue Tick
    </li>
    <li>
        Chat with unlimated people
    </li>
      <button onClick={()=>handlePremium("Gold")}  className='btn btn-secondary text-lg'>Buy Sliver</button>
  </div>
</div>
    </div>
  )
}

export default Premium
