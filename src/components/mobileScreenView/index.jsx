import { Box, Grid, Paper, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "../../assets/images/menuicon.svg";
import WebIcon from "../../assets/images/webicon.svg";
import FilterIcon from "../../assets/images/filtericon.svg";
import SearchIcon from "../../assets/images/searchicon.svg";
import BarIcon from "../../assets/images/baricon.svg";
import styles from "./Mobilescreen.module.css";
import PlusIcon from "../../assets/images/plusicon.svg";

import ChatIcon from "../../assets/images/chaticon.svg";
import TripleDot from "../../assets/images/trippledot.svg";
import CalenderIcon from "../../assets/images/calender.svg";
import ShareIcon from "../../assets/images/shareicon.svg";
import SharePerson from "../../assets/images/sharep.svg";
import { dataSet } from "./dataSet";
import AddAssesment from "../addAssesment";
import { SizeContext } from "../sizeContext";
import DrawerComponent from "./drawer";

const MobileScreen = () => {
  const { toggleSize } = React.useContext(SizeContext);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [openForm, setOpenForm] = useState(false);

  const handleOpen = () => {
    setOpenForm(!openForm);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  console.log(open);

  return (
    <React.Fragment>
      <Grid item style={{ width: "444px" }}>
        <Paper>
          <Grid container spacing={2}>
            <Grid
              item
              xs={2}
              ml={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={handleDrawerOpen}
            >
              <img src={MenuIcon} alt="img" className={styles.pointer} />
            </Grid>
            <Grid item xs={5} display="flex" alignItems="center">
              <Typography variant="h5" style={{ color: "#1C4980" }}>
                Assessment
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              <img
                src={WebIcon}
                alt="img"
                style={{ height: "20px", width: "20px", cursor: "pointer" }}
                onClick={toggleSize}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                sx={{
                  borderBottom: "1px solid #ccc", // Add a thin border
                }}
              >
                <Tab
                  label="My Assessment"
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#0073E6",
                    "&.Mui-selected": {
                      borderBottom: "2px solid blue",
                    },
                  }}
                />
                <Tab
                  label="Unstop Assessments"
                  style={{
                    paddingLeft: "100px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#3E6493",
                    "&.Mui-selected": {
                      borderBottom: "2px solid blue",
                    },
                  }}
                />
              </Tabs>

              {/* Content for "My Assessment" tab */}
              {value === 0 && (
                <Box p={3}>
                  <Grid item>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography variant="h5" style={{ color: "#1C4980" }}>
                          My Assessment
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        display="flex"
                        justifyContent="end"
                        pl={7}
                      >
                        <Grid container spacing={2}>
                          <Grid item>
                            <img src={SearchIcon} alt="img" />
                          </Grid>
                          <Grid item>
                            <img src={FilterIcon} alt="img" />
                          </Grid>
                          <Grid item>
                            <img src={BarIcon} alt="img" />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item pt={2}>
                      <Grid item xs={12}>
                        <Grid item className={styles.dottedBorder}>
                          <Grid
                            item
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            pt={1}
                            onClick={handleOpen}
                          >
                            <img
                              src={PlusIcon}
                              alt="img"
                              className={styles.pointer}
                            />
                          </Grid>
                          <Grid
                            item
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            py={1}
                          >
                            <Typography className={styles.text}>
                              New Assessment
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            textAlign="center"
                            pb={1}
                          >
                            <Typography className={styles.subText}>
                              From here you can add questions of multiple types
                              like MCQs, subjective (text or paragraph)!
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item py={2}>
                      {dataSet.map((item, index) => (
                        <Grid item className={styles.border} key={index} mb={2}>
                          <Grid container>
                            <Grid item xs={3}>
                              <img src={ChatIcon} />
                            </Grid>
                            <Grid item xs={7}>
                              <Grid item>
                                <Typography className={styles.text}>
                                  Math Assessment
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Grid container spacing={2} pt={1} pb={2}>
                                  <Grid item display="flex" alignItems="center">
                                    <Typography className={styles.jobtext}>
                                      Job
                                    </Typography>
                                  </Grid>
                                  <Grid
                                    item
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    height="20px"
                                    marginTop="15px"
                                    sx={{ borderRight: "1px solid #DADCE0" }}
                                  ></Grid>
                                  <Grid item display="flex" alignItems="center">
                                    <img src={CalenderIcon} />
                                    <span className={styles.dateText}>
                                      20 April 2023
                                    </span>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              display="flex"
                              justifyContent="end"
                            >
                              <img
                                src={TripleDot}
                                style={{ height: "30px", width: "30px" }}
                              />
                            </Grid>
                          </Grid>

                          <Grid
                            item
                            sx={{ borderBottom: "1px dashed #DADCE0" }}
                          ></Grid>
                          <Grid container pt={3} pb={1}>
                            <Grid item xs={6}>
                              <Grid container spacing={2}>
                                <Grid item>
                                  <Typography className={styles.jobtext}>
                                    00
                                  </Typography>
                                  <Typography className={styles.jobtext}>
                                    Duration
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography className={styles.jobtext}>
                                    00
                                  </Typography>
                                  <Typography className={styles.jobtext}>
                                    Questions
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={6}>
                              <Grid container>
                                <Grid
                                  item
                                  className={styles.share}
                                  display="flex"
                                  justifyContent="end"
                                  xs={6}
                                >
                                  <img src={ShareIcon} />
                                  <span className={styles.jobtext}>Share</span>
                                </Grid>
                                <Grid
                                  item
                                  xs={6}
                                  display="flex"
                                  justifyContent="flex-end"
                                >
                                  <img src={SharePerson} />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Box>
              )}

              {/* Content for "Unsupervised Assessment" tab */}
              {value === 1 && (
                <Box p={3}>
                  {/* Your content for "Unsupervised Assessment" tab goes here */}
                  <p>This is the content for Unsupervised Assessment tab.</p>
                </Box>
              )}
            </Box>
          </Grid>
        </Paper>
      </Grid>
      <AddAssesment
        open={openForm}
        handleClose={handleOpen}
        title="Create new assessment"
        size="xs"
      />
      <DrawerComponent open={open} handleDrawerClose={handleDrawerClose} />
    </React.Fragment>
  );
};
export default MobileScreen;
