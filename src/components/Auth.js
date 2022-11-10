import React, { useState } from "react";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import Register from "./Register";
import AppRouter from "./AppRouter";
export default function Auth() {
  const [authtype, setauthtype] = useState("Login");
  const swap = (auth) => {
    // setauthtype(authtype === "Login" ? "Register" : "Login");
    if (auth == "Login") {
      setauthtype("Register");
    } else if (auth == "Register") {
      setauthtype("Login");
    } else {
      setauthtype("Home");
    }
  };

  return (
    <div>
      {/* {authtype === "Login" && (
        <LoginForm>
          setauthtype={setauthtype} swap={swap}
        </LoginForm>
      )}
      {authtype === "Register" && <Register></Register>}
      {authtype === "Home" && <Homepage></Homepage>}

      <p onClick={swap}>{authtype === "Login" ? "Register" : "Login"}</p> */}
      <AppRouter />
    </div>
  );
}
