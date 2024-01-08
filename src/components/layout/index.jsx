import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Drawer,
  List,
  Typography,
  ListItemIcon,
  Divider,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { DashboardMenus } from "../../router/routes/dashboardRoutes";
import { Outlet } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { usePrivateLayoutController } from "./privateLayout.controller";
import { useStyles } from "./privateLayoutStyles";

// import { usePermission } from "components/RBAC"

const drawerWidth = 270;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  height: "100px",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "center",
}));

export default function PrivateLayout(props) {
  const styles = useStyles();

  const { navigate, handleLogout, activeMenu } =
    usePrivateLayoutController(props);

  console.log(Outlet);
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer sx={styles.drawer} variant="persistent" anchor="left" open={true}>
        <List>
          <Divider sx={styles.divider} />
          {DashboardMenus.map((item) => {
            return (
              <React.Fragment key={item.alias}>
                <ListItemButton
                  sx={
                    activeMenu(item) ? styles.activeListItem : styles.listItem
                  }
                  onClick={() => navigate(item.route)}
                >
                  <ListItemIcon
                    sx={activeMenu(item) ? styles.iconActive : styles.icon}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText>
                    <Typography sx={styles.listItemText}>
                      {item.title}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </React.Fragment>
            );
          })}
        </List>
      </Drawer>
      <Main>
        <Outlet />
      </Main>
    </Box>
  );
}
