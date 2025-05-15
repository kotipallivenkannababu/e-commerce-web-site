import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "./store";
import { useNavigate } from "react-router-dom";
import "./SignupForm.css"; // Make sure this path is correct

function SignupForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(registerUser(data));
    alert("User Registered Successfully");
    navigate("/signing");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <input
            type="mail"
            placeholder="abc@gmail.com"
            {...register("mail")}
          />
          <label>Gender:</label>
          <label>
            <input type="radio" value="male" {...register("gender")} /> Male
            <input type="radio" value="female" {...register("gender")} /> Female
          </label>

          <label>Category:</label>
          <select {...register("category")}>
            <option value="veg">Veg</option>
            <option value="nonveg">Non-Veg</option>
            <option value="milk">Milk products</option>
            <option value="chocolates">Chocolates</option>
          </select>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
