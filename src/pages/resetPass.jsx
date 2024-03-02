// import React from 'react'
// import { useParams } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function resetPass() {
    
    const [resetData, setResetData] = useState({ password: "", conpassword: "" });
    const [user, setUser] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [message, setMsg] = useState("");
    const [isErr, setIsErr] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [showConPass, setShowConPass] = useState(false);
    const { token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(token);
        fetch(`http://192.168.222.100:1111/reset-password/${token}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.success == true) {
              setUser(res.data.userId);
              console.log(res.data.userId);
              setIsValid(true);
            }
          });
      }, []);

      const handleChange = (e) => {
        setResetData({ ...resetData, [e.target.name]: e.target.value });
      };

      const handleReset = (e) => {
        e.preventDefault();
        if (resetData.password === resetData.conpassword) {
          fetch("http://192.168.222.100:1111/reset-pass", {
            method: "POST",
            body: JSON.stringify({userId:user, password:resetData.password}),
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
              if (res.success == true) {
                setMsg(res.data.message);
                setIsErr(false);
                setTimeout(() => {
                  navigate("/login");
                }, 1000);
              } else {
                setMsg(res.data.error);
                setIsErr(true);
              }
            })
            .catch((err) => {
              console.log(err);
              setMsg(`Error Occured : ${err}`);
              setIsErr(true);
            });
        } else {
          setMsg("Passwords do not match");
          setIsErr(true);
        }
      };

  return (
    <>
    {isValid ? (<div className="h-screen flex flex-col justify-center items-center">
      <p className="mb-5 text-3xl md:text-4xl lg:text-5xl font-cardo">
          Reset Passsword
    </p>
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
              <div className="w-full flex justify-center my-3">
            <button onClick={handleReset} className="px-5 py-2 text-white bg-gray-800 rounded-md">
              Submit
            </button>
          </div>
          {!isErr && message.length > 0 && (
            <div className="flex justify-center w-full my-2 p-2 border border-[#16a34a] bg-[#bbf7d0] rounded-md">
              <span className="text-[#15803d]">{message}</span>
            </div>
          )}
          {isErr && message.length > 0 && (
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
    </div>) : (
        <div className="h-screen w-full flex justify-center items-center">
        <p className="px-10 py-20 bg-white rounded-md">
          We were unable to find a valid token. Your token may have expired.
        </p>
        </div>
    )}
    </>
  )
}

export default resetPass
