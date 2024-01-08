import React from "react";
import styled from "@emotion/styled";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

const StyledFormControl = styled(FormControl)({
  width: "100%",
});

const StyledInputLabel = styled(InputLabel)({
  fontFamily: "Inter Regular",
  fontStyle: "normal",
  fontSize: "14px",
  lineHeight: "18px",
  color: "#191919",
});

const StyledOutlinedInput = styled(OutlinedInput)({
  padding: "10px",
  paddingTop: "15px",
  paddingBottom: "15px",
  fontStyle: "normal",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#191919",
  border: "1px solid #DADCE0",
  borderRadius: "8px",
  height: "50px",
  WebkitBoxShadow: "0 0 0 1000px #FFF inset",
  "&.Mui-focused": {
    borderColor: "#191919",
  },
});

const StyledSelect = styled(Select)({
  "& .MuiSelect-root": {
    paddingTop: "15px",
    paddingBottom: "15px",
  },
  "& .MuiSelect-icon": {
    top: "calc(50% - 12px)",
  },
});

const SelectField = ({ label, value, onChange, options, ...props }) => {
  return (
    <StyledFormControl variant="outlined">
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledSelect
        value={value}
        onChange={onChange}
        input={<StyledOutlinedInput label={label} />}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
};

export default SelectField;
