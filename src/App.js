import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css"
import Destination from "./pages/Destination";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination/>}/>

      </Route>
    </Routes>
  )
}

export default App;
