import React,{ useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Login from './components/login/Login';
import Home from './components/Home/Home'
import Post from './components/Post';
import Register from './components/registr/Register';
import Error from './components/Error';




function App() {

  const [api,setApi]=useState([]);

   const apiAddHandler = (item) =>{
    setApi(item);
   }

   const addInfo=(item)=>{
    setApi([...api, item])
   }
    
   

  return (
    <>
    
    <Header />

    <Routes>
     <Route path='/' element={<Login apiAddHandler={apiAddHandler} api={api} />}></Route>
     <Route path='/home' element={<Home />}></Route>
     <Route path='/post/:id' element={<Post />}></Route>
     <Route path='/registr' element={<Register addInfo={addInfo} api={api} />}></Route>
     <Route path='*' element={<Error />}></Route>
    </Routes>

    </>
  );
}

export default App;
