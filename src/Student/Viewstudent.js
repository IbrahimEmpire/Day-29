import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import { Home } from '../Home'



export const Viewstudent = () => {
    const [ user, setUser] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
       fetch(`https://63ddb97d367aa5a7a4135ba7.mockapi.io/user//${id}`, {method:"GET"})
       .then((res)=> res.json())
       .then((res)=> setUser(res))
    },[])
  return (
    <Home>
      <div className='user-detail-container'>
        
        <div >
        
    <img className='img-view-cont' src={user.image} alt='profile image' />
  </div>
<div className='details'>
<div className='first'>
    <h1>Name: {user.name}</h1>
    <h3>Id: {user.id}</h3>
  </div>
  <div className='detail-container'>
    <h5> Age: {user.age}</h5>
    <h5>📱 Mobile No: {user.mobile}</h5>
    <h5>📧 Email: {user.email}</h5>
    <h5>🏠 Location: {user.location}</h5>
    <button className='back' variant="outlined" onClick={()=> navigate(-1)}>Back</button>
  </div>
</div>
</div>
    </Home>
  )
}
