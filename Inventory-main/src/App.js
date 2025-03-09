import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllItems from "./Components/All/AllItems";
import AddItem from './Components/Add/AddItem';
import UpdateItem from './Components/Update/UpdateItem';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Admin from './Components/Admin';
import Order from './Components/Order';
import AllMenu from './Components/AllMenu';
import UpdateMenu from './Components/UpdateMenu';
import AllMenuUser from './Components/AllMenuUser';



const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/Homepage" element={<Homepage/>}/>
          <Route path="/" element={<AllItems />} />
          <Route path="/AddItem" element={<AddItem />}/>
          <Route path="/update" element={<UpdateItem />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/Admin" element={<Admin />}/>
          <Route path="/Order" element={<Order />}/>
          <Route path="/AllMenu" element={<AllMenu />}/>
          <Route path="/UpdateMenu" element={<UpdateMenu />}/>
          <Route path="/AllMenuUser" element={<AllMenuUser />}/>

         </Routes>
      </div>
    </Router>
  );
};

export default App;