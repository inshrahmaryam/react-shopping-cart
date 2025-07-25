import './LoginSignup.css'; 
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
const LoginForm = () => 
  {
const {register, handleSubmit, formState: { errors }}=useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Login data submitted:", data);
    localStorage.setItem("isAuthenticated", true);
     navigate("/home");
  }; 

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form-box">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <input {...register("username")}
            type="text"
            placeholder="Username"
            required
          />
          <input
            {...register("email", {
              validate: (value) => value.includes("@") || "Email must include @"
            })}
            type="text"
            placeholder="Email"
            required
          />
                    {/* Show email error message */}
          {errors.email && (
            <span className="error" style={{ color: "red", fontSize: "12px" }}>
              {errors.email.message}
            </span>
          )}



          <input {...register("password")}
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <button type="submit" className="submit">
          Login
        </button>
       
      </form>
    </div>
  );
};

export default LoginForm;
