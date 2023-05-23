
import './App.css';

import { Routes, Route} from 'react-router-dom';


import React from 'react'

import { Home } from './Home';
import { EditUser } from './Student/EditStudent';
import { Viewstudent } from './Student/Viewstudent';
import {Student} from './Student/Student'
import { Addstudent } from './Student/Addstudent';

import { User } from './Teacher/User';
import { UserView } from './Teacher/UserView';
import { Adduser } from './Teacher/Adduser';
import { Dashboard } from './Dashboard';
import { Wrong } from './Wrong';


function App() {
  return (
    <div className="App">

   <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/Student' element={<Student/>}/>
    <Route path='/add-stu' element={<Addstudent/>}/>
    <Route path='/Edit/:id' element={<EditUser/>}/>
    <Route path='/view/:id' element={<Viewstudent/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path='/user/:id' element={<UserView/>}/>
      <Route path='/user/edit/:id' element={<EditUser/>}/>
      <Route path="/Adduser" element={<Adduser/>}/>
      <Route path="*" element={<Wrong/>}/>
    

</Routes>

    </div>
  );
}

export default App;
