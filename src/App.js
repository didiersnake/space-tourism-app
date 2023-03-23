import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css"
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination/>}/>
        <Route path="crew" element={<Crew/>}/>


        <Route path="*" element={<Navigate to={"/"} replace />}/>
      </Route>
    </Routes>
  )
}

export default App;
