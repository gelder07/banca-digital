import React from 'react';
import _ from '@lodash';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormContext, Controller } from 'react-hook-form';

const HFTextarea = props => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const {
    name,
    label,
    className,
    rows,
    placeholder,
    icon,
    readOnly,
    size,
    defaultValue,
    variant,
    color,
    disabled,
  } = props;

  return (
    <div className={className}>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue || ''}
        render={({ field: { onChange, value, name } }) => (
          <TextField
            label={label}
            multiline
            rows={rows || 3}
            size={size || 'small'}
            disabled={disabled || false}
            placeholder={placeholder}
            error={!!_.get(errors, name, null)}
            helperText={_.get(errors, `${name}.message`, null)}
            onChange={e => onChange(e.target.value)}
            value={value || ''}
            variant={variant || 'outlined'}
            color={color || 'primary'}
            fullWidth
            autoComplete="off"
            InputLabelProps={{
              color: color || 'primary',
            }}
            InputProps={{
              readOnly: readOnly || false,
              color: color || 'primary',
              // inputComponent: Textarea,
              startAdornment: icon ? (
                <InputAdornment position="start">
                  <FontAwesomeIcon
                    color={!!_.get(errors, name, null) ? '#f44336' : null}
                    icon={icon}
                  />
                </InputAdornment>
              ) : null,
            }}
          />
        )}
      />
    </div>
  );
};

export default HFTextarea;
