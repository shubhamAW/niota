import React from "react";

const Button = ({ styles }) => {
  const handleClick = () => {
    // Replace "http://example.com" with the desired URL
    window.location.href = "https://play.google.com/store/apps/details?id=com.sharad.NseIndicesOptionVirtualTrading&hl=en&gl=US&pli=1";
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
