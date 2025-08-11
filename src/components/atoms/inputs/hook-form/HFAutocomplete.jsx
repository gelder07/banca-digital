import React from "react";
import _ from "lodash";
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

const HFAutocomplete = (props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const renderCuentaCompact = (option) => {
    if (!option) return null;
    if (renderOptionText) {
      return renderOptionText(option);
    }
    if (getOptionLabel) {
      return getOptionLabel(option);
    }
    return option.toString();
  };

  const {
    name,
    label,
    placeholder,
    options,
    variant,
    getOptionLabel, // enviar la funcion para renderizar el label, eje: (option) => option.descripcion
    renderOption,
    renderOptionText,
    defaultValue,
    disableClearable,
    disableCloseOnSelect,
    className,
    readOnly,
    size,
    multiple,
    loading,
    loadingText,
    disabled,
    groupBy,
  } = props;

  return (
    <div className={className}>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue || null}
        render={({ field: { onChange, value, name } }) => (
          <Autocomplete
            name={name}
            options={options}
            disabled={disabled || false}
            disableCloseOnSelect={disableCloseOnSelect || false}
            multiple={multiple || false}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            getOptionLabel={getOptionLabel}
            renderOption={renderOption}
            size="medium"
            style={{ width: "100%" }}
            onChange={(_event, data) => onChange(data)}
            value={value || null}
            loading={loading || false}
            loadingText={loadingText}
            groupBy={groupBy}
            sx={{
              "& .MuiInputBase-root": {
                height: 40, // o la altura que quieras
                minHeight: 40,
                fontFamily: "Poppins ,sans-serif",
                backgroundColor: "white",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#3B8668",
              },
              "& .MuiInputBase-input": {
                fontFamily: "Poppins ,sans-serif",
                padding: "14px 24px",
                fontSize: "14px",
              },
            }}
            disableClearable={disableClearable || false}
            noOptionsText="There are not available options"
            renderInput={(params) => {
              const newParams = { ...params };

              newParams.inputProps = {
                ...(newParams.inputProps || {}),
                value: "",
              };

              const selectedAdornment =
                !multiple && value ? (
                  <div className="pl-2 pr-2">{renderCuentaCompact(value)}</div>
                ) : null;

              return (
                <TextField
                  {...newParams}
                  label={label}
                  size={size || "small"}
                  variant={variant || "outlined"}
                  placeholder={placeholder}
                  error={!!_.get(errors, name, null)}
                  helperText={_.get(errors, `${name}.message`, null)}
                  InputProps={{
                    ...newParams.InputProps,
                    style: { fontSize: 12 },
                    readOnly: readOnly || false,
                    startAdornment:
                      selectedAdornment || newParams.InputProps?.startAdornment,
                    endAdornment: (
                      <>
                        {!!loading && (
                          <CircularProgress
                            color="inherit"
                            size={18}
                            thickness={5}
                          />
                        )}
                        {newParams.InputProps?.endAdornment}
                      </>
                    ),
                  }}
                  fullWidth
                />
              );
            }}
          />
        )}
      />
    </div>
  );
};

export default HFAutocomplete;
