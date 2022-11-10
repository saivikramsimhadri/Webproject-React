import React, { useState } from "react";

function ForgotPassword({ error }) {
  const [details, setDetails] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    resetUser();
  };

  const resetUser = () => {
    let { newPassword, confirmPassword } = details;

    if (newPassword == confirmPassword) {
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Reset Password</h2>
        {error != "" ? <div className="error">{error}</div> : ""}

        <div className="form-group">
          <label htmlFor="newPassword">newPassword:</label>
          <input
            type="password"
            name="newPassword"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, newPassword: e.target.value })
            }
            value={details.password}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">ConfirmPassword:</label>
          <input
            type="password"
            name="confirmPassword"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, confirmPassword: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input
          type="submit"
          value="RESET"
          onClick={() => {
            resetUser();
          }}
        />
      </div>
    </form>
  );
}
export default ForgotPassword;
