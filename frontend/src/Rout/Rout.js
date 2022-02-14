import React from "react";
import { Home, About, Tutor, ContactUs } from "../Pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function Rout() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/tutor" element={<Tutor/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
    </Router>
  );
}
