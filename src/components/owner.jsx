import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'

import Home from './../pages/home.jsx';
import Addplace from './../pages/addplace.jsx';
import Profile from './../pages/profile.jsx';  
import Status from './../pages/status.jsx';

function owner() {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route index path="/Venue-Vista-Hackathon" element={<Home />} />
            <Route path="/Venue-Vista-Hackathon/profile" element={<Profile />} />
            <Route path="/Venue-Vista-Hackathon/addplace" element={<Addplace />} />
            <Route path="/Venue-Vista-Hackathon/status" element={<Status />} />
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default owner
