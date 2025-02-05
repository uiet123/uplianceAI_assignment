import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { useAuth } from "../src/ContextAPI/AuthContext";
import Counter from "./components/Counter/Counter";
import UserForm from "./components/UserForm/UserForm";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import ProtectedRoute from "./ProtectedRoute";

import "./App.css";

function App() {
  const { currentUser, signOut } = useAuth();

  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/form">User Form</Link>
        {!currentUser && <Link to="/login">Login</Link>}
        {currentUser && (
          <button className="signout-button" onClick={() => signOut()}>Sign Out</button>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/counter"
          element={
            <ProtectedRoute>
              <Counter />
            </ProtectedRoute>
          }
        />
        <Route
          path="/form"
          element={
            <ProtectedRoute>
              <UserForm />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
