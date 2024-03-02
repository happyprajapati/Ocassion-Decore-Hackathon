import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './../pages/home'
import Login from './../pages/login'
import Register from './../pages/register'
import Profile from './../pages/profile';
import ResetPass from './../pages/resetPass';

function user() {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="login/reset-password/:token" element={<ResetPass />} />
            {/* <Route path="rooms" element={<Rooms />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
      </>
    )
}

export default user
