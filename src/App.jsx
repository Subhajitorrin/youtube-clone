import React, { useRef, useState } from 'react';
import "./App.css";
import Heading from "./Components/Heading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';

function App() {
  const [toggleMenu,setToggleMenu] = useState(false);
  const [searchData,setsearchData] =useState("");
  return (
    <Router>
      <div>
        <Heading toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} setsearchData={setsearchData}/>
        <Home toggleMenu={toggleMenu} searchData={searchData}/>
      </div>
    </Router>
  );
}

export default App;
