import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const AutoCompleteCustomize = ({
  options,
  getOptionLabel, // (option) => option.name_en,
  onChange,
  value,
  placeholder,
  isDisabled,
  label,
}) => {
  return (
    <div className="w-full">
      <Autocomplete
        options={options}
        getOptionLabel={getOptionLabel}
        value={value}
        onChange={(_event, data) => onChange(data)}
        disableClearable
        size="small"
        renderInput={(params) => (
          <TextField
            {...params}
            disabled={isDisabled}
            placeholder={placeholder}
            required
            label={label}
            variant="outlined"
          />
        )}
      />
    </div>
  );
};

export default AutoCompleteCustomize;
