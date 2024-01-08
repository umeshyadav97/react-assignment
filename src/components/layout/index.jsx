import * as React from "react";
import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { usePrivateLayoutController } from "./privateLayout.controller";
import { useStyles } from "./privateLayoutStyles";
import SideBar from "./sideScetion";

export default function PrivateLayout(props) {
  const styles = useStyles();

  const { navigate } = usePrivateLayoutController(props);

  return (
    <Box style={styles.main}>
      <Grid
        container
        // spacing={2}
        style={{ backgroundColor: "red", height: "100%" }}
        // sx={styles.gridContainer}
      >
        <Grid
          item
          md={1.5}
          sm={1.5}
          sx={{
            ...styles.sideSectionContainer,
            display: { xs: "none", md: "flex" },
            background: "white",
          }}
        >
          <SideBar navigate={navigate} />
        </Grid>

        <Grid
          item
          xs={12}
          md={10.5}
          sm={12}
          sx={{ overflowX: "scroll", background: "#F6F8FA" }}
        >
          {/* <Main> */}
          <Outlet />
          {/* </Main> */}
        </Grid>
      </Grid>
    </Box>
  );
}
