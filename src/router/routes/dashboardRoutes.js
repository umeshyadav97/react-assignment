// Export all routes that should be in the side menu
import React from "react"
import HomeIcon from "@mui/icons-material/Dashboard"
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest"
import GroupIcon from "@mui/icons-material/Group"
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"
import AddTaskIcon from "@mui/icons-material/AddTask"

import DashboardImageActive from "../../assets/images/dashboardactive.svg";
import DashboardImageInActive from "../../assets/images/dashboardinactive.svg";
import AssesmentImageActive from "../../assets/images/assesmentactive.svg";
import AssesmentImageInActive from "../../assets/images/assesmentinactive.svg";

class MenuPath {
  constructor(title, icon, route, alias = null) {
    this.title = title
    this.icon = icon
    this.route = route
    this.alias = alias || title.replace(" ", "_").toLowerCase()
  }
}

export const DashboardMenus = [
  // new MenuPath("Dashboard", <HomeIcon />, "/u/dashboard"),
  // new MenuPath("Assessment", <GroupIcon />, "/u/assessment"),
   new MenuPath("Dashboard", <DashboardImageActive />, <DashboardImageInActive />, "/u/dashboard", true),
  new MenuPath("Assessment", <AssesmentImageActive />, <AssesmentImageInActive />, "/u/assessment", false),
 
]
