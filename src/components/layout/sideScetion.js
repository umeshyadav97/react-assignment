import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Link } from "@mui/material";
import AdminImage from "../../assets/images/admin.svg";
import { DashboardMenus } from "../../router/routes/dashboardRoutes";
import { useLocation } from "react-router-dom";

function SideBar({navigate}) {
  const router = useLocation();
 

  return (
    <React.Fragment>
      <Grid
        item
        sx={{
          background: "#ffffff",
          height: "100vh",
          width: "100%",
        }}
      >
        <Grid item pt={4} pl={2}>
          {DashboardMenus.map((item) => (
            <Grid
              item
              key={item.link}
                  py={2.5}
                   onClick={() => navigate(item.alias)}
              sx={
                router.pathname === item.alias
                  ? {
                      border: "1px solid #0073E6",
                      background: "#E5F1FC",
                      borderRadius: "8px",
                      margin: "15px",
                    }
                  : {}
              }
            >
              <Grid item display="flex" justifyContent="center" pb={1}>
                <img
                  src={
                    router.pathname === item.alias // Adjusted to use "alias" instead of "link"
                      ? item.icon.type
                      : item.route.type // Corrected from "item.imageInActive" to "item.icon.type"
                  }
                  height={20}
                  width={20}
                  alt="image"
                />
              </Grid>

              <Grid item display="flex" justifyContent="center">
                <Link
                  sx={
                    router.pathname === item.alias
                      ? {
                          textDecoration: "none",
                          variant: "inherit",
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#0073E6",
                        }
                      : {
                          textDecoration: "none",
                          variant: "inherit",
                          fontSize: "14px",
                          fontWeight: "500",
                        }
                  }
                  href={item.link}
                >
                  {item.title}
                </Link>
              </Grid>
            </Grid>
          ))}
          <Grid
            item
            mx={2}
            pt={2}
            sx={{
              borderBottom: "1px dashed var(--System-Stroke, #BACBD5)",
            }}
          ></Grid>
          <Grid item pt={2} display="flex" justifyContent="center">
            <Typography
              sx={{
                border: "1px solid #D63500",
                borderRadius: "8px",
                background: "#FBEBEA",
                width: "50px",
                fontSize: "10px",
                fontWeight: "500",
                color: "#D63500",
                paddingLeft: "8px",
              }}
            >
              Admin
            </Typography>
          </Grid>
          <Grid item pt={2}>
            <Grid item display="flex" justifyContent="center">
              <img src={AdminImage} height={20} width={20} alt="image" />
            </Grid>
            <Grid item display="flex" justifyContent="center">
              <Typography
                sx={{ fontSize: "14px", fontWeight: "500", color: "#1C4980" }}
              >
                Round <br />
                Status
              </Typography>
            </Grid>
          </Grid>
        </Grid>
       
      </Grid>
    </React.Fragment>
  );
}
export default SideBar;
