import React from "react";
import { useGlobalContext } from "../Context";

const FormInput = ({ label, value, error }) => {
  const { handleInputChange } = useGlobalContext();
  return (
    <div className="form">
      <label className="form-label">{label}</label>
      <input
        name={label}
        className={`form-input ${error ? "form-input error" : ""}`}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FormInput;
