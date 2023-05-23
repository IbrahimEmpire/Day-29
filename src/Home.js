import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = ({style,title, children}) => {
  const navigate = useNavigate()
  return (
    <div>
    <div>
          <div className="nav">
          <div>
          <button className="nav-btn"
              onClick={()=> navigate('/')}
              >Home</button>
               <button className="nav-btn"
              onClick={()=> navigate('/add-stu')}
              >Add Student</button>
              <button className="nav-btn"
              onClick={()=> navigate('/adduser')}
              >Add Teacher</button>
          </div>
            <div>
            <button className="nav-btn"
              onClick={()=> navigate('/student')}
              ><img className='stu-img' src='https://cdn-icons-png.flaticon.com/512/5850/5850276.png'/></button>
              <button className="nav-btn"
              onClick={()=> navigate('/user')}
              ><img className='stu-img' src='https://cdn-icons-png.flaticon.com/512/2941/2941658.png'/></button>
            </div>
              
              </div>
          <div className={style}>{title}</div>
          </div>
     <div className="childred">{children} </div>
      <footer>
         
              Created By Ibrahim 
              
              
        
      </footer>
  </div>
  )
}
