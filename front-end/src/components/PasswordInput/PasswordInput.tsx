import { useState } from "react";
import OpenEyeIcon from "../../assets/OpenEye";
import CloseEyeIcon from "../../assets/CloseEye";
import './PasswordInput.css'
const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-password">
      <input
        type={showPassword ? "text" : "password"}
        className="input-password"
        placeholder="Password"
      />
      <div
        className={`password-toggle-icon ${showPassword ? "visible" : ""}`}
        onClick={togglePasswordVisibility}
      >
        {/* Ícone de olho */}
        {showPassword ? <OpenEyeIcon/> : <CloseEyeIcon/>}
      </div>
    </div>
  );
};

export default PasswordInput;
