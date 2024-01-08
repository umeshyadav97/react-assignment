import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const DescriptionBox = styled(TextField)({
  "& label": {
    fontStyle: "normal",
    fontWeight: "500",
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
    color: "#191919",
    border: "1px solid #BBBBBB",
    borderRadius: "8px",
    WebkitBoxShadow: "0 0 0 1000px #FFF inset",
    height: "100px",
    color: "#1C4980",
    fontWeight: "500",
  },
  "& .MuiInputBase-input:focus": {},
  "& .Mui-error": {
    "& .MuiInputBase-input": {
      border: "1px solid #E13838",
      fontFamily: "Inter Regular",
    },
  },
  "& .Mui-disabled": {
    "& .MuiInputBase-input": {
      backgroundColor: "#E9E9E9",
      WebkitBoxShadow: "0 0 0 1000px #E9E9E9 inset",
      fontFamily: "Inter Regular",
      borderRadius: "8px",
    },
  },
});

export default DescriptionBox;
