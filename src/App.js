import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";

import "./App.css";
// npm i react-dom
//npm install react-router-dom
function App() {
  return (
    <div className="app-main">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
