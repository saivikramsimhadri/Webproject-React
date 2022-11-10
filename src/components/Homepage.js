import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage(Homepage, error) {
  const navigate = useNavigate();
  const LogoutUser = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Update Information</h2>
      <input
        type="submit"
        value="LOGOUT"
        onClick={() => {
          LogoutUser();
        }}
      />
    </div>
  );
}
