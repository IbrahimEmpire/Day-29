
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from '../Home';







export function User() {

  const [user, setUser] = useState([]);
 
const navigate = useNavigate()
  const getUser= ()=>{
    fetch(`https://63ddb97d367aa5a7a4135ba7.mockapi.io/books`,{method:"GET"})
    .then((res)=>res.json())
    .then((res)=> setUser(res))
  }
  useEffect(()=>{
    getUser()
    },[])

  const deleteUser =(id)=>{
    fetch(`https://63ddb97d367aa5a7a4135ba7.mockapi.io/books/${id}`, {method:"DELETE"})
    .then(()=> getUser())
  }


  
  return (
    <Home>
         <h1>Teachers</h1>
        <div className='T-carts'>
           
      {user.map((user, id)=>   

      <div className='T-profile-container' key={id}>
        <div >
          <img className='img-con' src={user.image} alt='profile image' />
        </div>
        <div>
          <h4>Name: {user.name}</h4>
          <h5>Id: {user.id}</h5>
        </div>
        <div>
          <p> Age: {user.age}</p>
          <p>📱 Mobile No: {user.mobile}</p>
          <p>📧 Email: {user.email}</p>
          <p>🏠 Location: {user.location}</p>
        </div>
        <button className='button view' onClick={()=> navigate(`/user/${user.id}`)} >View</button>
        <button className='button edit' onClick={()=> navigate(`/user/edit/${user.id}`)} >Edit</button>
        <button className='button del' onClick={()=> deleteUser(user.id)} >Delete</button>
      </div>
  )}
     </div>
    </Home>
  );
}

