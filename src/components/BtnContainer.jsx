import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { useGlobalContext } from "../Context";

const BtnContainer = () => {
  const { handleButtonClick } = useGlobalContext();

  return (
    <div className="btn-container">
      <div className="underline"></div>
      <button type="button" className="btn-submit" onClick={handleButtonClick}>
        <FaArrowDown className="btn-icon" />
      </button>
    </div>
  );
};

export default BtnContainer;
