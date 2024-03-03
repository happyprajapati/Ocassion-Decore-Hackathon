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
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="addplace" element={<Addplace />} />
            <Route path="status" element={<Status />} />
            {/* <Route path="login/reset-password/:token" element={<ResetPass />} /> */}
            {/* <Route path="rooms" element={<Rooms />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default owner
