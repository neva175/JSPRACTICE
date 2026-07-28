import { useState } from "react";
import "./Signup.css";
import { FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (name.trim() === "") {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }

    if (email.trim() === "") {
      setEmailError("Please enter a valid email address");
      valid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      setEmailError("Please enter a valid email address");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      valid = false;
    } else {
      setConfirmPasswordError("");
    }

    if (valid) {
      alert("Account Created Successfully");
    }
  };

  return (
    <div className="container">

      <form className="card" onSubmit={handleSubmit}>

        <h2>Create Account</h2>

        <label>Name</label>

        <input
          type="text"
          placeholder="John"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {nameError && (
          <p className="error">{nameError}</p>
        )}

        <label>Email</label>

        <input
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {emailError && (
          <p className="error">{emailError}</p>
        )}

        <label>Password</label>

        <div className="passwordBox">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>

        </div>

        {passwordError && (
          <p className="error">{passwordError}</p>
        )}

        <label>Confirm Password</label>

        <div className="passwordBox">

          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="******"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
          />

          <span
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
          >
            {showConfirmPassword ? (
              <FaEyeSlash />
            ) : (
              <FaEye />
            )}
          </span>

        </div>

        {confirmPassword === password &&
          confirmPassword !== "" && (
            <p className="success">
              <FaCheckCircle /> Passwords match
            </p>
          )}

        {confirmPasswordError && (
          <p className="error">
            {confirmPasswordError}
          </p>
        )}

        <button>Create Account</button>

      </form>

    </div>
  );
};

export default Signup;