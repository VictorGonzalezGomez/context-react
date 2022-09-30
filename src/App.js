import "./styles.css";
import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";

import MyProvider from "./context/Context";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const [photo, setPhoto] = useState([]);
  const Pro = async () => {
    const endpoint = "./fotos.json";
    const resp = await fetch(endpoint);
    const data = await resp.json();

    setPhoto(data.photos);
  };

  useEffect(() => {
    Pro();
  }, []);


  return (
    <div className="App">
      <MyProvider.Provider value={photo}>
        <BrowserRouter>
          <Navbar/>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/favoritos" element={<Favoritos/>}/>
          </Routes>
        </BrowserRouter>
      </MyProvider.Provider>
    </div>
  );
}
