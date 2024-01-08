import { Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./NewAssesment.module.css";
import PlusIcon from "../../assets/images/plusicon.svg";
import ChatIcon from "../../assets/images/chaticon.svg";
import TripleDot from "../../assets/images/trippledot.svg";
import CalenderIcon from "../../assets/images/calender.svg";
import ShareIcon from "../../assets/images/shareicon.svg";
import SharePerson from "../../assets/images/sharep.svg";
import SingleSharePerson from "../../assets/images/singleshare.svg";
import AddAssesment from "../addAssesment";
import { useNewAssesmentController } from "./newAssesment.controller";

const NewAssesment = () => {
  const { handleChange, openForm } = useNewAssesmentController();
  return (
    <React.Fragment>
      <Grid item pl={4} pt={2} xs={12} pr={2}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Grid item className={styles.dottedBorder}>
              <Grid
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
                pt={4}
                onClick={handleChange}
              >
                <img src={PlusIcon} alt="img" className={styles.pointer} />
              </Grid>
              <Grid
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
                py={2}
              >
                <Typography className={styles.text}>New Assessment</Typography>
              </Grid>
              <Grid
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                pb={3}
              >
                <Typography className={styles.subText}>
                  From here you can add questions of multiple types like MCQs,
                  subjective (text or paragraph)!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid item className={styles.border}>
              <Grid container>
                <Grid item xs={6}>
                  <img src={ChatIcon} />
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="end">
                  <img
                    src={TripleDot}
                    alt="img"
                    style={{ height: "30px", width: "30px" }}
                  />
                </Grid>
              </Grid>
              <Grid item>
                <Typography className={styles.text}>Math Assessment</Typography>
              </Grid>
              <Grid item sx={{ borderBottom: "1px dashed #DADCE0" }}>
                <Grid container spacing={2} pt={1} pb={2}>
                  <Grid item display="flex" alignItems="center">
                    <Typography variant="h1" sx={{ color: "#1C4980" }}>
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
                    <span className={styles.dateText}>20 April 2023</span>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container pt={3} pb={2}>
                <Grid item xs={6}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Typography variant="h1" sx={{ color: "#1C4980" }}>
                        00
                      </Typography>
                      <Typography variant="h1" sx={{ color: "#1C4980" }}>
                        Duration
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h1" sx={{ color: "#1C4980" }}>
                        00
                      </Typography>
                      <Typography variant="h1" sx={{ color: "#1C4980" }}>
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
                      xs={5}
                    >
                      <img src={ShareIcon} />
                      <span className={styles.shareText}>Share</span>
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="flex-end">
                      <img src={SingleSharePerson} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid item className={styles.border}>
              <Grid container>
                <Grid item xs={6}>
                  <img src={ChatIcon} />
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="end">
                  <img
                    src={TripleDot}
                    alt="img"
                    style={{ height: "30px", width: "30px" }}
                  />
                </Grid>
              </Grid>
              <Grid item>
                <Typography className={styles.text}>Math Assessment</Typography>
              </Grid>
              <Grid item sx={{ borderBottom: "1px dashed #DADCE0" }}>
                <Grid container spacing={2} pt={1} pb={2}>
                  <Grid item display="flex" alignItems="center">
                    <Typography variant="h1" sx={{ color: "#1C4980" }}>
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
                    <span className={styles.dateText}>20 April 2023</span>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container pt={3} pb={2}>
                <Grid item xs={6}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Typography variant="h1" sx={{ color: "#1C4980" }}>
                        00
                      </Typography>
                      <Typography variant="h1" sx={{ color: "#1C4980" }}>
                        Duration
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h1" sx={{ color: "#1C4980" }}>
                        00
                      </Typography>
                      <Typography variant="h1" sx={{ color: "#1C4980" }}>
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
                      xs={5}
                    >
                      <img src={ShareIcon} />
                      <span className={styles.shareText}>Share</span>
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="flex-end">
                      <img src={SharePerson} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <AddAssesment
        open={openForm}
        handleClose={handleChange}
        title="Create new assessment"
        size="sm"
      />
    </React.Fragment>
  );
};
export default NewAssesment;
