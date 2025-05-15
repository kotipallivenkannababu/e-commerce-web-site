import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser } from "./store";
import "./Signing.css"; // Make sure this matches your file name

function Signing() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myFunc = (data) => {
    dispatch(loginUser(data));
    navigate("/");
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit(myFunc)}>
          <input
            type="text"
            placeholder="Username"
            {...register("username")}
          />
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <button type="submit">Sign In</button>
        </form>
        <p>
          New User? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Signing;
