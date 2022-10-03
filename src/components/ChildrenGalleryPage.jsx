import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../views/Home";
import Favoritos from "../views/Favoritos";
const ChildrenGalleryPage = () => {


  return (

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favoritos" element={<Favoritos/>}/>
        </Routes>
      </BrowserRouter>

  )
};

export default ChildrenGalleryPage;