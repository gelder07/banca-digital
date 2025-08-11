import React from 'react';
import { NumericFormat } from 'react-number-format';

export const percentNumberFormat = React.forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { onChange, suffix, ...other } = props;
  const inputRef = ref;

  return (
    <NumericFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            // eslint-disable-next-line react/prop-types
            name: props.name,
            value: values.floatValue || null,
          },
        });
      }}
      thousandSeparator
      suffix="%"
      valueIsNumericString={true}
      decimalScale={2}
      allowNegative={false}
    />
  );
});

export const decimalNumberFormat = React.forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { onChange, suffix, ...other } = props;
  const inputRef = ref;

  return (
    <NumericFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            // eslint-disable-next-line react/prop-types
            name: props.name,
            value: values.floatValue || null,
          },
        });
      }}
      thousandSeparator
      suffix={suffix}
      valueIsNumericString={true}
      decimalScale={4}
      allowNegative={false}
    />
  );
});

export const exchangeRateNumberFormat = React.forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { onChange, suffix, ...other } = props;
  const inputRef = ref;

  return (
    <NumericFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            // eslint-disable-next-line react/prop-types
            name: props.name,
            value: values.floatValue || null,
          },
        });
      }}
      thousandSeparator
      suffix={suffix}
      valueIsNumericString={true}
      decimalScale={4}
      allowNegative={false}
    />
  );
});

export const integerNumberFormat = React.forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { onChange, suffix, ...other } = props;
  const inputRef = ref;

  return (
    <NumericFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            // eslint-disable-next-line react/prop-types
            name: props.name,
            value: values.floatValue || null,
          },
        });
      }}
      thousandSeparator
      suffix={suffix}
      valueIsNumericString={true}
      decimalScale={0}
      allowNegative={false}
    />
  );
});

export const simpleNumberFormat = React.forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { onChange, ...other } = props;
  const inputRef = ref;

  return (
    <NumericFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            // eslint-disable-next-line react/prop-types
            name: props.name,
            value: values.floatValue || null,
          },
        });
      }}
      allowLeadingZeros
      valueIsNumericString={true}
      decimalScale={0}
      allowNegative={false}
    />
  );
});
