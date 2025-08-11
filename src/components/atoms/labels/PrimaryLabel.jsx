import React from "react";

const PrimaryLabel = (props) => {
  const { text, color, size, font, weight = "medium", className } = props;

  const weights = {
    light: "font-light",
    regular: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  return (
    <span
      className={`${size || "text-xl"} ${weights[weight]} ${
        font || "font-poppins"
      } ${color || "text-black"} ${className}`}
    >
      {text}
    </span>
  );
};

export default PrimaryLabel;
