import _ from "lodash";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormContext, Controller } from "react-hook-form";

import {
  decimalNumberFormat,
  percentNumberFormat,
  integerNumberFormat,
  simpleNumberFormat,
  exchangeRateNumberFormat,
} from "../NumberFormat";

const HFNumberFormatField = (props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const {
    name,
    label,
    type,
    placeholder,
    className,
    icon,
    size,
    disabled,
    readOnly,
    prefix,
    style,
    show,
    realValue,
    color,
  } = props;

  const getFormatComponent = (type) => {
    switch (type) {
      case "percent":
        return percentNumberFormat;
      case "decimal":
        return decimalNumberFormat;
      case "integer":
        return integerNumberFormat;
      case "exchange":
        return exchangeRateNumberFormat;
      default:
        return simpleNumberFormat;
    }
  };

  return (
    <div className={className}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, name } }) => (
          <TextField
            label={label}
            size={size || "small"}
            placeholder={placeholder}
            error={!!_.get(errors, name, null)}
            helperText={_.get(errors, `${name}.message`, null)}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            variant="outlined"
            color="primary"
            disabled={disabled || false}
            fullWidth
            autoComplete="off"
            InputLabelProps={{
              shrink: true,
              color: color || "primary",
            }}
            InputProps={{
              style: {
                fontWeight: style,
              },
              color: color || "primary",
              readOnly: readOnly || false,
              inputComponent: getFormatComponent(type),
              startAdornment: icon ? (
                <InputAdornment position="start"></InputAdornment>
              ) : prefix ? (
                <InputAdornment position="start">{prefix}</InputAdornment>
              ) : null,
              endAdornment: show ? (
                <Typography variant="h6" className="text-grey-400">
                  <span
                    style={{ fontSize: "13px", textDecoration: "line-through" }}
                  >
                    {realValue}
                  </span>
                </Typography>
              ) : null,
            }}
          />
        )}
      />
    </div>
  );
};

export default HFNumberFormatField;
