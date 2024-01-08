import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import React from "react";

const StyledTextField = styled(TextField)({
  "& label": {
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#191919",
  },
  "& label.Mui-focused": {
    color: "#191919",
  },
  "& .MuiInputBase-input": {
    padding: "10px",
    paddingTop: "15px",
    paddingBottom: "15px",
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#1C4980",
    border: "1px solid #DADCE0",
    borderRadius: "8px",
    WebkitBoxShadow: "0 0 0 1000px #FFF inset",
    height: "1rem",
    fontWeight: "500",
  },
  "& .MuiInputBase-input:focus": {},
  "& .Mui-error": {
    "& .MuiInputBase-input": {
      border: "1px solid #DADCE0",
      fontFamily: "Inter Regular",
    },
  },
  "& .Mui-disabled": {
    "& .MuiInputBase-input": {
      backgroundColor: "#E9E9E9",
      WebkitBoxShadow: "0 0 0 1000px #E9E9E9 inset",
      fontFamily: "Inter Medium",
      borderRadius: "8px",
    },
  },
  "& input[type=number]": {
    "-moz-appearance": "textfield",
  },
  "& input[type=number]::-webkit-outer-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
  "& input[type=number]::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
});

const InputField = ({ onChange, ...props }) => {
  return (
    <>
      <StyledTextField
        {...props}
        onChange={onChange}
        InputProps={{ disableUnderline: true, autoComplete: "off" }}
      />
    </>
  );
};

export default InputField;
