import { useState, useEffect } from 'react';
import {student} from '../Api'
import { useNavigate } from 'react-router-dom';
import { Home } from '../Home';






export function Student() {

  const [user, setUser] = useState([]);
 
const navigate = useNavigate()
  const getUser= ()=>{
    fetch(`${student}`,{method:"GET"})
    .then((res)=>res.json())
    .then((res)=> setUser(res))
  }
  useEffect(()=>{
    getUser()
    },[])

  const deleteUser =(id)=>{
    fetch(`https://63ddb97d367aa5a7a4135ba7.mockapi.io/user/${id}`, {method:"DELETE"})
    .then(()=> getUser())
  }


  
  return (
    <Home>
      <h1>Students</h1>
    <div className='carts'>
      {user.map((user, id)=>   

      <div className='profile-container' key={id}>
        <div >
          <img className='img-con' src={user.image} alt='profile image' />
        </div>
        <div className='detail-container'>
        <div className='detail-inner-container'>
          <h4>Name: {user.name}</h4>
          <h5>Id: {user.id}</h5>
        </div>
        <div>
          <p> Age: {user.age}</p>
          <p>📱 Mobile No: {user.mobile}</p>
          <p>📧 Email: {user.email}</p>
          <p>🏠 Location: {user.location}</p>
        </div>
        </div>
        <button className='button view' onClick={()=> navigate(`/view/${user.id}`)} >View</button>
        <button className='button edit' onClick={()=> navigate(`/edit/${user.id}`)} >Edit</button>
        <button className='button del' onClick={()=> deleteUser(user.id)} >Delete</button>
      </div>
  )}
     </div>
     </Home>
  );
}

