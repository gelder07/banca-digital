import Button from "@mui/material/Button";

const PrimaryButton = ({
  label,
  onClick,
  disabled,
  variant = "outlined",
  color,
  backgroundColor,
  type = "button",
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      type={type}
      sx={{
        margin: "1rem",
        padding: "10px 20px",
        fontFamily: "Poppins, sans-serif",
        borderColor: "black",
        color: color,
        backgroundColor: backgroundColor,
        "&:hover": {
          backgroundColor: backgroundColor,
        },
      }}
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
