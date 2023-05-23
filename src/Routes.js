import { Routes, Route, useNavigate, Navigate, BrowserRouter} from 'react-router-dom';


import React from 'react'
import { Student } from './Student/Student';
import { Home } from './Home';
import { EditStudent } from './Student/EditStudent';
import { Viewstudent } from './Student/Viewstudent';

export const Routes = () => {
  return (
    <div>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Student' element={<Student/>}/>
    <Route path='/Edit' element={<EditStudent/>}/>
    <Route path='/view' element={<Viewstudent/>}/>
</Routes>

    </div>
  )
}
