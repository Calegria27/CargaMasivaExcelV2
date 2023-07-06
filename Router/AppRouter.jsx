import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Auth/pages/Login';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import  Mainview  from '../views/Mainview';
export const AppRouter = () => {
  return (
    <div >
        <Routes>
            <Route path ="Login/*" element={
            <PublicRouter>
              <Routes>
                <Route path ="/*" element={<Login/>}/>
              </Routes>       
            </PublicRouter>}/>

          
            
            <Route path ="/*" element={
            <PrivateRouter>
              <Mainview/>
            </PrivateRouter>}/>


        </Routes>
    </div>
    
  )
}