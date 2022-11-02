import React from 'react';
import {BrowserRouter, NavLink, Routes, Route} from "react-router-dom";
import '../App.css'


import Books from './Books'
import Excercise from './Excercise'
import Finance from './Finance'
import Home from './Home'
import Media from './Media'
import Music from './Music'
import Nutrition from './Nutrition'
import Tech from './Tech'



function Header() {
  let activeClassName = "nav-active";
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li> <NavLink end to="" className={({ isActive }) => isActive ? activeClassName : undefined}>Home</NavLink></li>
            <li> <NavLink to="books" className={({ isActive }) => isActive ? activeClassName : undefined}>Books</NavLink></li>
            <li> <NavLink to="excercise" className={({ isActive }) => isActive ? activeClassName : undefined}>Excercise</NavLink></li>
            <li> <NavLink to="finance" className={({ isActive }) => isActive ? activeClassName : undefined}>Finance</NavLink></li>
            <li> <NavLink to="music" className={({ isActive }) => isActive ? activeClassName : undefined}>Music</NavLink></li>
            <li> <NavLink to="nutrition" className={({ isActive }) => isActive ? activeClassName : undefined}>Nutrition</NavLink></li>
            <li> <NavLink to="tech" className={({ isActive }) => isActive ? activeClassName : undefined}>Tech</NavLink></li>
            <li> <NavLink to="media" className={({ isActive }) => isActive ? activeClassName : undefined}>TV & Movies</NavLink></li>
          </ul>
        </nav>
      </header>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/books" element={<Books/>} />
         <Route path="/excercise" element={<Excercise/>} />
         <Route path="/finance" element={<Finance/>} />
         <Route path="/music" element={<Music/>} />
         <Route path="/nutrition" element={<Nutrition/>} />
         <Route path="/tech" element={<Tech/>} />
         <Route path="/media" element={<Media/>} />
       </Routes>
    </BrowserRouter>
   
    );
}

export default Header; 