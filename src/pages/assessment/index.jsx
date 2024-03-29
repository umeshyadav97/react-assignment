import React, { useState } from "react";
import {
  Box,
  Divider,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import styles from "../../styles/Assesment.module.css";
import AssesmentImage from "../../assets/images/assment.svg";
import CandidateImage from "../../assets/images/candidate.svg";
import MobileView from "../../assets/images/mobileIcon.svg";
import PurposeImage from "../../assets/images/purposeicon.svg";
import SourceIcon from "../../assets/images/sourceicon.svg";
import { SizeContext } from "../../components/sizeContext";
import MobileScreen from "../../components/mobileScreenView";
import NewAssesment from "../../components/newAssment/index";

function Assesment() {
  const { toggleSize, isMobile } = React.useContext(SizeContext);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      {isMobile ? (
        <MobileScreen />
      ) : (
        <Box sx={{ maxWidth: "130%", width: "130%" }}>
          <Grid item pl={1}>
            <Paper>
              <Grid item pt={4}>
                <Grid
                  container
                  sx={{
                    borderBottom: "1px solid #ccc", // Add a thin border
                  }}
                  px={4}
                >
                  <Grid item xs={10}>
                    <Tabs value={value} onChange={handleChange}>
                      <Tab
                        label="Assessment"
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",

                          "&.Mui-selected": {
                            borderBottom: "2px solid blue",
                          },
                        }}
                      />
                      <Tab
                        label="My Assessments"
                        style={{
                          paddingLeft: "100px",
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#0073E6",
                          "&.Mui-selected": {
                            borderBottom: "2px solid blue",
                          },
                        }}
                      />
                    </Tabs>
                  </Grid>
                  <Grid
                    item
                    display="flex"
                    justifyContent="flex-end"
                    xs={2}
                    onClick={toggleSize}
                  >
                    <img
                      src={MobileView}
                      alt="image"
                      style={{
                        height: "30px",
                        width: "30px",
                        cursor: "pointer",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              {value === 0 && (
                <Box p={3}>
                  {/* Your content for "Unsupervised Assessment" tab goes here */}
                  <p>This is the content for Unsupervised Assessment tab.</p>
                </Box>
              )}
              {value === 1 && (
                <>
                  <Grid item pl={4} pt={2}>
                    <Typography className={styles.hedingText}>
                      Assessments Overview
                    </Typography>
                  </Grid>
                  <Grid item className={styles.cardborder} m={2}>
                    <Grid container>
                      <Grid
                        item
                        xs={2}
                        sx={{ borderRight: "1px solid #DADCE0" }}
                      >
                        <Grid item p={3}>
                          <Grid item>
                            <Typography className={styles.headText}>
                              Total Assessment
                            </Typography>
                          </Grid>
                          <Grid item pt={2}>
                            <Grid container spacing={2}>
                              <Grid item>
                                {" "}
                                <img src={AssesmentImage} alt="img" />
                              </Grid>
                              <Grid
                                item
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                              >
                                <Typography className={styles.countText}>
                                  34
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        sx={{ borderRight: "1px solid #DADCE0" }}
                      >
                        <Grid item p={3}>
                          <Grid item>
                            <Typography className={styles.headText}>
                              Candidates
                            </Typography>
                          </Grid>
                          <Grid item pt={2}>
                            <Grid container spacing={2}>
                              <Grid item>
                                <img src={CandidateImage} alt="img" />
                              </Grid>
                              <Grid item>
                                <Grid
                                  item
                                  sx={{
                                    borderRight: "1px solid #DADCE0",
                                    paddingRight: "20px",
                                  }}
                                >
                                  <Typography className={styles.countText}>
                                    11,145
                                    <span className={styles.greenText}>
                                      +89
                                    </span>
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography className={styles.subHeading}>
                                    Total Candidate
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid item>
                                <Grid item>
                                  <Typography className={styles.countText}>
                                    1,14
                                    <span className={styles.greenText}>
                                      +89
                                    </span>
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography className={styles.subHeading}>
                                    Who Attempted
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        sx={{ borderRight: "1px solid #DADCE0" }}
                      >
                        <Grid item p={3}>
                          <Grid item>
                            <Typography className={styles.headText}>
                              Candidates Source
                            </Typography>
                          </Grid>
                          <Grid item pt={2}>
                            <Grid container spacing={2}>
                              <Grid item>
                                <img src={SourceIcon} alt="img" />
                              </Grid>
                              <Grid item>
                                <Grid
                                  item
                                  sx={{
                                    borderRight: "1px solid #DADCE0",
                                    paddingRight: "20px",
                                  }}
                                >
                                  <Typography className={styles.countText}>
                                    11,000
                                    <span className={styles.greenText}>
                                      +89
                                    </span>
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography className={styles.subHeading}>
                                    Email
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid item>
                                <Grid
                                  item
                                  sx={{
                                    borderRight: "1px solid #DADCE0",
                                    paddingRight: "20px",
                                  }}
                                >
                                  <Typography className={styles.countText}>
                                    1,45
                                    <span className={styles.greenText}>
                                      +89
                                    </span>
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography className={styles.subHeading}>
                                    SocialShare
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid item>
                                <Grid item>
                                  <Typography className={styles.countText}>
                                    1,45
                                    <span className={styles.greenText}>
                                      +89
                                    </span>
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography className={styles.subHeading}>
                                    SocialShare
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={2}>
                        <Grid item p={3}>
                          <Grid item>
                            <Typography className={styles.headText}>
                              Total Purpose
                            </Typography>
                          </Grid>
                          <Grid item pt={2}>
                            <Grid container spacing={2}>
                              <Grid item>
                                {" "}
                                <img src={PurposeImage} alt="img" />
                              </Grid>
                              <Grid
                                item
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                              >
                                <Typography className={styles.countText}>
                                  11
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item pl={4} pt={2}>
                    <Typography className={styles.hedingText}>
                      My Assessment
                    </Typography>
                  </Grid>
                  <Grid item pb={10}>
                    <NewAssesment />
                  </Grid>
                </>
              )}
            </Paper>
          </Grid>
        </Box>
      )}
    </div>
  );
}

export default Assesment;
