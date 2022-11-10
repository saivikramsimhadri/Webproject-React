import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

export default function Link() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/forgotPwd" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Link />);
