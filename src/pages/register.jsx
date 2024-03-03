import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function register() {

    const [formData, setFormData] = useState({ name:"", email: "", password: "", conpassword:"", contact:"", role:"" });
    const [showPass, setShowPass] = useState(false);
    const [showConPass, setShowConPass] = useState(false);
    const [message, setMsg] = useState([]);
    const [isErr, setIsErr] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
        console.log(formData);
    }
    
const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password != formData.conpassword) {
        setMsg(["Passwords do not match"]);
        setIsErr(true);
        return;
      }
      fetch("http://192.168.0.107:1111/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((res) => {
        //   console.log(res.data.message);
          if (res.success == true) {
            setMsg(res.data.message);
            setIsErr(false);
            setTimeout(() => {
              navigate('/Venue-Vista-Hackathone/login')
            }, 1500);
          } else {
            setMsg(res.data.error);
            setIsErr(true);
          }
        })
        .catch((err) => {
          console.log(err);
          setMsg([`Error Occured : ${err}`]);
          setIsErr(true);
        });
}

  return (
    <div className="h-screen">
      <div className="h-screen flex flex-col justify-center items-center">
        <p className="mb-5 text-3xl md:text-4xl lg:text-5xl font-cardo">
          Sign Up
        </p>
        <form className="w-full md:w-[80%] lg:w-[50%]">
          <input
            type="text"
            placeholder="name"
            name="name"
            value={FormData.email}
            onChange={handleChange}
            className="w-full m-2 p-2 border-2 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={FormData.email}
            onChange={handleChange}
            className="w-full m-2 p-2 border-2 rounded-md"
          />
           <div className="relative">
                {showPass && (
                  <i
                    className="fa fa-eye absolute right-3 top-6 cursor-pointer"
                    aria-hidden="true"
                    onClick={() => {
                      setShowPass(!showPass);
                    }}
                  ></i>
                )}
                {!showPass && (
                  <i
                    className="fa fa-eye-slash absolute right-3 top-6 cursor-pointer"
                    aria-hidden="true"
                    onClick={() => {
                      setShowPass(!showPass);
                    }}
                  ></i>
                )}
                <input
                  
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={FormData.password}
                  onChange={handleChange}
                  className="w-full m-2 p-2 border-2 rounded-md"
                />
              </div>
              <div className="relative">
                {showConPass && (
                  <i
                    className="fa fa-eye absolute right-3 top-6 cursor-pointer"
                    aria-hidden="true"
                    onClick={() => {
                        setShowConPass(!showConPass);
                    }}
                  ></i>
                )}
                {!showConPass && (
                  <i
                    className="fa fa-eye-slash absolute right-3 top-6 cursor-pointer"
                    aria-hidden="true"
                    onClick={() => {
                        setShowConPass(!showConPass);
                    }}
                  ></i>
                )}
                <input
                  
                  type={showConPass ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="conpassword"
                  value={FormData.conpassword}
                  onChange={handleChange}
                  className="w-full m-2 p-2 border-2 rounded-md"
                />
              </div>
          <input
            type="tel"
            name="contact"
            placeholder="Contact"
            value={FormData.contact}
            onChange={handleChange}
            className="w-full m-2 p-2 border-2 rounded-md"
          />
          <select className="w-full m-2 p-2 border-2 rounded-md" name="role" onChange={handleChange}>
            <option>Select Role</option>
            <option value="owner">Owner</option>
            <option value="buyer">Buyer</option>
          </select>
          <div className="w-full flex justify-center my-3">
            <button onClick={handleSubmit} className="px-5 py-2 text-white bg-gray-800 rounded-md">
              Register
            </button>
          </div>
          {message.length > 0 && !isErr && (
              <div className="flex justify-center w-full my-2 p-2 border border-[#16a34a] bg-[#bbf7d0] rounded-md">
                <span className="text-[#15803d]">{message}</span>
              </div>
            )}
            {message.length > 0 && isErr && (
              <div className="flex justify-center w-full my-2 p-2 border border-[#dc2626] bg-[#fecaca] rounded-md">
                <span className="text-[#b91c1c] flex flex-col items-center">
                  {message.length > 1 ? (
                    message.map((err, key) => <p key={key}>{err.msg}</p>)
                  ) : (
                    <p>{message[0]}</p>
                  )}
                </span>
              </div>
            )}
        </form>
      </div>
    </div>
  );
}

export default register;
