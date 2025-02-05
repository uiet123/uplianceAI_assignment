import React, { useEffect } from "react";
import { useAuth } from "../../ContextAPI/AuthContext";
import { useNavigate } from "react-router-dom"; 
import "./Login.css"
export default function Login() {
  const { signInWithGoogle, currentUser } = useAuth(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    if (currentUser) {
      navigate("/"); 
    }
  }, [currentUser, navigate]); 

  return (
    <div className="login">
      <div className="login-content">
      <h2>Login Page</h2>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    </div>
  );
}
