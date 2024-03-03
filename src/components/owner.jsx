import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Header from './../components/header'
import Footer from './../components/footer';
<<<<<<< HEAD
import Home from './../pages/home';
import Profile from "./../pages/profile";

=======
import Home from './../pages/home.jsx';
import Addplace from './../pages/addplace.jsx';
import Profile from './../pages/profile.jsx';  
import Status from './../pages/status.jsx';
>>>>>>> 8c3a7f42b94fe12331ab44d8ccde902a91410b67

function owner() {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
<<<<<<< HEAD
=======
            <Route path="addplace" element={<Addplace />} />
            <Route path="status" element={<Status />} />
>>>>>>> 8c3a7f42b94fe12331ab44d8ccde902a91410b67
            {/* <Route path="login/reset-password/:token" element={<ResetPass />} /> */}
            {/* <Route path="rooms" element={<Rooms />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default owner
