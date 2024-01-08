import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import { useStyles } from "./styles";
import FieldHeading from "../fieldHeading";
import InputField from "../inputField";
import SelectField from "../selectField";
import DescriptionBox from "../descriptionBox";
import SkillField from "../skillField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AddAssesment({ open = false, handleClose, title = "", size }) {
  const styles = useStyles();

  const [inputValue, setInputValue] = useState("");
  const [storedValues, setStoredValues] = useState([]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      const trimmedValue = inputValue.trim();
      if (trimmedValue !== "") {
        setStoredValues((prevValues) => [...prevValues, trimmedValue]);
        setInputValue("");
      }
    }
  };

  const handleRemoveValue = (index) => {
    setStoredValues((prevValues) => {
      const newValues = [...prevValues];
      newValues.splice(index, 1);
      return newValues;
    });
  };
  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth={size}
      TransitionComponent={Transition}
      keepMounted
      onBackdropClick={handleClose}
    >
      <DialogTitle sx={{ borderBottom: "1px solid #DADCE0" }}>
        <Grid container alignItems="center">
          <Grid item xs={8}>
            <Typography sx={styles.title} variant="h3">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Grid container justifyContent="flex-end">
              <IconButton
                onClick={handleClose}
                sx={{
                  borderRadius: "50%",
                  color: "#1C4980",
                }}
                disableRipple
              >
                <CloseIcon sx={{ color: "text.black" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Box pt={2}>
          <Grid item>
            <FieldHeading title="Name of assessment" />
            <InputField
              id="name"
              placeholder="Type here"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item pt={2}>
            <FieldHeading title="Purpose of the test is" />
            <SelectField
              label="Select "
              fullWidth
              //   value={selectedValue}
              //   onChange={handleChange}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                // Add more options as needed
              ]}
            />
          </Grid>
          <Grid item pt={2}>
            <FieldHeading title="Description" />
            <DescriptionBox
              id="description"
              placeholder="Description"
              variant="standard"
              fullWidth
              rows={2}
              multiline
              //   value={addNotes}
              //   onChange={handleInputChange}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Grid>
          <Grid item pt={2}>
            <FieldHeading title="Skills" />
            <Grid
              item
              sx={{
                border: "1px solid #DADCE0",
                minHeight: "50px",
                borderTopRightRadius: "8px",
                borderTopLeftRadius: "8px",
              }}
            >
              <Grid container p={1} spacing={1}>
                {storedValues.map((value, index) => (
                  <Grid item key={index}>
                    <Grid
                      container
                      alignItems="center"
                      sx={{
                        background: "#DDEDFF",
                        borderRadius: "22px",
                      }}
                    >
                      <Grid item pl={1}>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "#1C4980",
                          }}
                        >
                          {value}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <IconButton
                          onClick={() => handleRemoveValue(index)}
                          color="primary"
                        >
                          <CloseIcon sx={{ height: "10px", width: "10px" }} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <SkillField
              id="name"
              placeholder="Type here"
              variant="standard"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleEnterPress}
              fullWidth
            />
          </Grid>
          <Grid item py={2}>
            <FieldHeading title="Duration of assessment" />
            <InputField
              id="name"
              placeholder="HH:MM:SS"
              variant="standard"
              type="number"
              fullWidth
            />
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box
          width="100%"
          display="flex"
          justifyContent="start"
          pl={2}
          sx={{ background: "#fff" }}
        >
          <Button
            variant="contained"
            sx={{
              padding: "11px 22px",
              width: "100%",
              height: "40px",
              background: "#0073E6",
              borderRadius: "8px",
            }} // Set width to 100%
            // disabled={isButtonDisabled}
            // onClick={() => handleAdd(templateDetail)}
          >
            Save
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

export default AddAssesment;
