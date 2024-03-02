import React , {useState} from "react";
import { useNavigate } from "react-router-dom";

function login() {

    const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
    const [message, setMsg] = useState([]);
  const [email, setEmail] = useState("");
    const [isErr, setIsErr] = useState(false);
    const navigate = useNavigate();
  const [isForget, setIsForget] = useState(false);

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        fetch("http://192.168.222.100:1111/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success == true) {
            setMsg([res.data.message]);
            localStorage.setItem("token",res.data.authToken);
            localStorage.setItem("role",res.data.role);
            setMsg([res.data.message]);
            setIsErr(false)
            setTimeout(() => {
                navigate('/')
              }, 1500);
          } else {
            setMsg([res.data.message]);
            setIsErr(true);
          }
        })
        .catch((err) => {
          console.log(err);
          setMsg([`Error Occured : ${err}`]);
          setIsErr(true);
        });
    }

    const handleForget = () => {
        setIsForget(!isForget);
      };

      const handleEmailSubmit = (e) => {
        e.preventDefault();
        fetch("http://192.168.222.100:1111/send-token", {
          method: "POST",
          body: JSON.stringify({email: email}),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            if (res.success == true) {
              setMsg([res.data.message]);
              // setToken(res.data.token);
              setIsErr(false);
            } else {
              setMsg([res.data.message]);
              setIsErr(true);
            }
          })
          .catch((err) => {
            console.log(err);
            setMsg([`Error Occured : ${err}`]);
            setIsErr(true);
          });
      };

  return (
    <div className="h-screen">

     {!isForget ? ( <div className="h-screen flex flex-col justify-center items-center">
        <p className="mb-5 text-3xl md:text-4xl lg:text-5xl font-cardo">
          Login
        </p>
        <form className="w-full md:w-[80%] lg:w-[50%]">
          <input
            type="email"
            placeholder="Email"
            name="email"
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
              <div className="flex justify-end">
                <button onClick={handleForget}>Forget Password ?</button>
              </div>
          <div className="w-full flex justify-center my-3">
            <button onClick={handleSubmit} className="px-5 py-2 text-white bg-gray-800 rounded-md">
              Login
            </button>
          </div>
        </form>
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
      <div className="h-screen flex flex-col justify-center items-center">
         <span className="text-2xl my-5 libre font-bold text-ft">Reset Password</span>
          <form className="w-full lg:px-10 md:px-0 sm:px-10">
            <input
              type="email"
              placeholder="email"
              name="email"
              className="w-full p-2 border-2 border-gray-600 rounded-md my-3"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <div className="flex justify-center">
              <button className="w-full my-3 p-2 bg-bt rounded-md text-black font-semibold" onClick={handleEmailSubmit}>
                Submit
              </button>
            </div>
          </form>
          </div>
        )}
    </div>
  );
}

export default login;
