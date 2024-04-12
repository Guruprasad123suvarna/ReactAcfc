import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Login.css"; // Import the CSS file
 
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
 
  useEffect(() => {
    // Apply background image styling to the body element
    document.body.style.backgroundImage =
      "url('https://github.com/Guruprasad-suvarna/Tensai/assets/83869639/4b52d3e2-633f-4194-8563-c2f24898c3e6'),url('https://github.com/Guruprasad-suvarna/Tensai/assets/83869639/22e0e093-e9e2-4757-8851-81b7ed85dee5')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "left center,left center";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "50%,85%";
    // Clean up the effect when component unmounts
    return () => {
      document.body.style.backgroundImage = null;
      document.body.style.backgroundRepeat = null;
      document.body.style.backgroundPosition = null;
      document.body.style.backgroundAttachment = null;
      document.body.style.backgroundSize = null;
    };
  }, []); // Empty dependency array to run the effect only once when component mounts
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "Acfc@hexaware.com" && password === "Acfc@123") {
      // Successful login
      navigate("/dashboard");
    } else {
      setError("Invalid Username or Password!");
    }
  };
 
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
 
  return (<div className="login-container" style={{ backgroundImage: "url('https://github.com/Guruprasad-suvarna/Tensai/assets/83869639/2d38245b-5512-48c8-848f-64a3dffff139')", backgroundSize: "cover", backgroundPosition: "center" }}>
<h2>Login</h2>
<form onSubmit={handleSubmit}>
<div className="form-group">
<label>Username:</label>
<input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
</div>
<div className="form-group">
<label>Password:</label>
<div className="password-input">
<input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
<button
              type="button"
              className="toggle-password"
              onClick={togglePasswordVisibility}
>
<FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
</button>
</div>
</div>
<button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
</form>
</div>
  );
};
 
export default Login;


