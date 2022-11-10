import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ Register, error }) {
  const [details, setDetails] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    Register(details);
  };
  const navigate = useNavigate();

  const MainPage = () => {

    
    navigate("/");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Signup</h2>
        {error != "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">FirstName:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">LastName:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input
          type="submit"
          value="Signup"
          onClick={() => {
            MainPage();
          }}
        />
      </div>
    </form>
  );
}
export default Register;
