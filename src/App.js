import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Global/Header/Header";
import Footer from "./Components/Global/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Guru from "./Components/Guru/Guru";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Guru" element={<Guru />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
