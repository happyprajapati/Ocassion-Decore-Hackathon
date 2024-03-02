import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Header from './../components/header'
import Footer from './../components/footer';
import Home from './../pages/home';
import Profile from "./../pages/profile";


function owner() {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            {/* <Route path="login/reset-password/:token" element={<ResetPass />} /> */}
            {/* <Route path="rooms" element={<Rooms />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default owner
