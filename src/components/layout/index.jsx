import * as React from "react";
import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { usePrivateLayoutController } from "./privateLayout.controller";
import { useStyles } from "./privateLayoutStyles";
import SideBar from "./sideScetion";
import { SizeContext } from "../sizeContext";

export default function PrivateLayout(props) {
  const styles = useStyles();
  const { navigate } = usePrivateLayoutController(props);
  const { isMobile } = React.useContext(SizeContext);

  return (
    <Box style={styles.main}>
      <Grid container style={{ height: "100%" }}>
        {isMobile ? null : (
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
        )}
        <Grid
          item
          xs={12}
          md={isMobile ? 12 : 10.5}
          sm={isMobile ? 12 : 12}
          sx={{
            overflowX: isMobile ? "hidden" : "scroll",
            background: "#F6F8FA",
            width: isMobile ? "375px" : "auto",
            margin: isMobile ? "auto" : "0",
            display: isMobile ? "flex" : "block",
            justifyContent: isMobile ? "center" : "inherit",
          }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}
