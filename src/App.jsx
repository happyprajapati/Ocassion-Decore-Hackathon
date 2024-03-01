import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header'
import Home from './pages/home'
import './App.css'
// import Application from './../pages/student/application'
// import Auth from './../pages/student/auth'
// import ResetPass from './../pages/student/resetPass'

function user() {
    return (
        // <div className="bg-[url('/background1.jpg')] bg-cover bg-center h-full">
        // <div className="w-full h-full bg-black/60">
        <>
        <Header />
        <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            {/* <Route path="application" element={<Application />} />
            <Route path="login" element={<Auth />} />
            <Route path="login/reset-password/:token" element={<ResetPass />} /> */}
            {/* <Route path="rooms" element={<Rooms />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
        {/* </div>
      </div> */}
      </>
    )
}

export default user
