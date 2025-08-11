import _ from "lodash";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useFormContext, Controller } from "react-hook-form";

const HFTextField = (props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const {
    name,
    label,
    placeholder,
    className,
    icon,
    size,
    disabled,
    readOnly,
    variant,
    color,
    defaultValue,
  } = props;

  return (
    <div className={className}>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { onChange, value, name } }) => (
          <TextField
            label={label}
            size={size || "small"}
            placeholder={placeholder}
            error={!!_.get(errors, name, null)}
            helperText={_.get(errors, `${name}.message`, null)}
            onChange={(e) => onChange(e.target.value)}
            value={value || ""}
            variant={variant || "outlined"}
            fullWidth
            disabled={disabled || false}
            autoComplete="off"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#3B8668",
              },
              "& .MuiInputBase-input": {
                fontFamily: "Poppins ,sans-serif",
                padding: "14px 24px",
                fontSize: "14px",
              },
              "& .MuiInputBase-root": {
                backgroundColor: "white",
              },
            }}
            InputLabelProps={{
              color: color || "primary",
            }}
            InputProps={{
              readOnly: readOnly || false,
              color: color || "primary",
              startAdornment: icon ? (
                <InputAdornment position="start"></InputAdornment>
              ) : null,
            }}
          />
        )}
      />
    </div>
  );
};

export default HFTextField;
