import React from "react";

const GoogleIcon = (props) => {
  const { icon, size, color, className } = props;

  return (
    <span
      className={`material-icons ${className}`}
      style={{ fontSize: size, color: color || "black" }}
    >
      {icon}
    </span>
  );
};

export default GoogleIcon;
