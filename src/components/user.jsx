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
            <Route index path="/Venue-Vista-Hackathon" element={<Home />} />
            <Route path="/Venue-Vista-Hackathon/profile" element={<Profile />} />
            <Route path="/Venue-Vista-Hackathon/login" element={<Login />} />
            <Route path="/Venue-Vista-Hackathon/register" element={<Register />} />
            <Route path="/Venue-Vista-Hackathon/login/reset-password/:token" element={<ResetPass />} />
            <Route path="/Venue-Vista-Hackathon/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
      </>
    )
}

export default user
