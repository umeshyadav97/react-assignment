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
  const [storedValue, setStoredValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      setStoredValue(inputValue);
      setInputValue(""); // Clear the input field after storing the value
    }
  };

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth={size}
      TransitionComponent={Transition}
      keepMounted
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
                  border: "1px solid #EAECF0",
                  backgroundColor: "#FFFFFF",
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
            ></Grid>
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
        </Box>
      </DialogContent>
      <DialogActions>
        <Box width="100%" display="flex" justifyContent="start" pl={2}>
          <Button
            variant="contained"
            sx={{ padding: "11px 22px" }}
            // disabled={isButtonDisabled}
            // onClick={() => handleAdd(templateDetail)}
          >
            Add Note
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

export default AddAssesment;
