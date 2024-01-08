import {
  Drawer,
  Grid,
  IconButton,
  Link,
  List,
  Typography,
} from "@mui/material";
import { DashboardMenus } from "../../router/routes/dashboardRoutes";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Mobilescreen.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import AdminImage from "../../assets/images/admin.svg";

const DrawerComponent = ({ open, handleDrawerClose }) => {
  const navigateTo = useNavigate();
  const router = useLocation();
  const drawerWidth = 315;
  const navigate = (route) => {
    navigateTo(route);
  };
  return (
    <>
      <Drawer
        sx={{
          //   left: "50%", // Center horizontally
          width: 0,
          flexShrink: 0,
          zIndex: "1000",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="center"
        open={open}
      >
        <Grid item style={{ background: "#F2F8FE", height: "100vh" }}>
          <Grid container pt={2}>
            <Grid item xs={6} display="flex" alignItems="center" pl={2}>
              <Typography className={styles.menuText}>Menu</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              pr={2}
            >
              <IconButton
                onClick={handleDrawerClose}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  color: "#1C4980",
                }}
                disableRipple
              >
                <CloseIcon sx={{ color: "text.black" }} />
              </IconButton>
            </Grid>
          </Grid>

          <List>
            {DashboardMenus.map((item) => (
              <Grid
                container
                key={item.link}
                p={2.5}
                xs={10}
                // onClick={() => navigate(item.alias)}
                sx={
                  router.pathname === item.alias
                    ? {
                        border: "1px solid #0073E6",
                        background: "#E5F1FC",
                        borderRadius: "8px",
                        marginLeft: "10px",
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

                <Grid item display="flex" justifyContent="center" pl={2}>
                  <Link
                    sx={
                      router.pathname === item.alias
                        ? {
                            textDecoration: "none",
                            variant: "inherit",
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#0073E6",
                            fontSize: "14px",
                            fontWeight: "500",
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
          </List>
          <Grid
            item
            mx={2}
            pt={2}
            sx={{
              borderBottom: "1px dashed var(--System-Stroke, #BACBD5)",
            }}
          ></Grid>
          <Grid container xs={12}>
            <Grid item>
              <Grid container pt={2} pl={2}>
                <Grid item display="flex" justifyContent="center" pr={2}>
                  <img src={AdminImage} height={20} width={20} alt="image" />
                </Grid>
                <Grid item display="flex" justifyContent="center">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#1C4980",
                    }}
                  >
                    Round Status
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              pt={2}
              xs={6}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
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
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
};
export default DrawerComponent;
