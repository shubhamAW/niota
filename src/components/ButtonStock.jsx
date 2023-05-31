import React from "react";

const ButtonStock = ({ styles }) => {
  const handleClick = () => {
    // Replace "http://example.com" with the desired URL
    window.location.href = "http://127.0.0.1:8000/";
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      Go to Stock Predictor
    </button>
  );
};

export default ButtonStock;