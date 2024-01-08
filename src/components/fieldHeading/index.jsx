import { Typography } from "@mui/material";
// import styled from "@emotion/styled"
import React from "react";

const useStyles = () => ({
  text: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#1C4980",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingBottom: "5px",
  },
});

const FieldHeading = ({ title }) => {
  const classes = useStyles();
  return <Typography sx={classes.text}>{title}</Typography>;
};

export default FieldHeading;
