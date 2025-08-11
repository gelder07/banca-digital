import React from "react";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import GoogleIcon from "../icons/GoogleIcon";

const TextFieldCustomize = ({
  label,
  value,
  onChange,
  placeholder,
  label,
  ...props
}) => {
  return (
    <TextField
      className="mb-16"
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      variant="outlined"
      required
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <GoogleIcon
                className="rotate-90 "
                icon="swap_vertical_circle"
                size={24}
                color="#3B8668"
              />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default TextFieldCustomize;
