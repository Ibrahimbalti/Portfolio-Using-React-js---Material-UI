import {  TextField,form } from "@mui/material";
import { Theme } from "../color Patern/Theme"

const useStyles = {
  cssLabel: {
    color: "#d3d3d3",
    "&.Mui-focused": {
      color: Theme.colors.primary,
    },
  },
  //input props root
  cssOutlinedInput: {
    "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline":
      {
        borderColor: Theme.colors.base2, //default
        opacity: 0.5,
      },
    "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
      opacity: 1,
      borderColor: Theme.colors.base2, //hovered #DCDCDC
    },
    "&$cssFocused $notchedOutline": {
      borderColor: Theme.colors.primary, //focused
      color: Theme.colors.primary,
    },
  },
  notchedOutline: {},
  cssFocused: {},
  error: {},
  disabled: {},
};

export const RenderInputText = ({
  name,
  label,
  state,
  onChange,
  multiline,
  rows,
}) => {
  const { data, errors } = state;

  return (
    <TextField
      InputLabelProps={{
        classes: {
          root:  useStyles.cssLabel,
          focused:  useStyles.cssFocused,
        },
      }}
      InputProps={{
        classes: {
          root:  useStyles.cssOutlinedInput,
          focused:  useStyles.cssFocused,
          notchedOutline:  useStyles.notchedOutline,
        },
      }}
      variant='outlined'
      label={label}
      fullWidth={true}
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name]}
      onChange={onChange}
      multiline={multiline}
      rows={rows}
    />
  );
};