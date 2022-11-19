import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import "./login.css";
import toast, { Toaster } from 'react-hot-toast';
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if((userRef.current.value)=="")
    {
      toast.error("Username cannot be empty")
    }
    else if(passwordRef.current.value==""){
      toast.error("Password cannot be empty")
    }else{
    try {
      const res = await axios.post("https://experio-backend-sahil-halgekar.onrender.com/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      toast.error("Invalid Credentials..!!");
    }
  }
  };

  return (
    <div className="login">
      <div className="headerTitles">
        <span className="headerTitleLg">Experio</span>
        <span className="headerTitleSm">An Experience Sharing Platform</span>
        <div className="login-glass">
          <span className="loginTitle">Login</span>
          <form className="loginForm" >
            <input
              type="text"
              className="loginInput1"
              placeholder="Enter Username"
              ref={userRef}
            />
            <input
              type="password"
              className="loginInput2"
              placeholder="Enter Password"
              ref={passwordRef}
            />
            
          </form>
          <button onClick={handleSubmit} className="loginButton" type="submit" disabled={isFetching}>
              Login
            </button>
        </div>
      </div>
      <Toaster   toastOptions={{
    success: {
      style: {
        fontSize:"2rem",
      },
    },
    error: {
      style: {
        fontSize:"2rem",
      },
    },
  }} />
    </div>
  );
}
