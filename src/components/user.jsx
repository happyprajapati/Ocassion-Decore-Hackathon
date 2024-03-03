import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './../pages/home'
import Login from './../pages/login'
import Register from './../pages/register'
import Profile from './../pages/profile';
import ResetPass from './../pages/resetPass';
import Payment from './../pages/payment';

function user() {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route index path="/Venue-Vista" element={<Home />} />
            <Route path="/Venue-Vista/profile" element={<Profile />} />
            <Route path="/Venue-Vista/login" element={<Login />} />
            <Route path="/Venue-Vista/register" element={<Register />} />
            <Route path="/Venue-Vista/login/reset-password/:token" element={<ResetPass />} />
            <Route path="/Venue-Vista/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
      </>
    )
}

export default user
