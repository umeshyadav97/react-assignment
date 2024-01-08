// Export all routes that should be in the side menu
import React from "react"
import DashboardImageActive from "../../assets/images/dashboardactive.svg";
import DashboardImageInActive from "../../assets/images/dashboardinactive.svg";
import AssesmentImageActive from "../../assets/images/assesmentactive.svg";
import AssesmentImageInActive from "../../assets/images/assesmentinactive.svg";
import LibraryImageInActive from "../../assets/images/libraryinactive.svg";
import LibraryImageActive from "../../assets/images/libraryactive.svg";

class MenuPath {
  constructor(title, icon, route, alias = null) {
    this.title = title
    this.icon = icon
    this.route = route
    this.alias = alias || title.replace(" ", "_").toLowerCase()
  }
}

export const DashboardMenus = [
   new MenuPath("Dashboard", <DashboardImageActive />, <DashboardImageInActive />, "/u/dashboard", true),
  new MenuPath("Assessment", <AssesmentImageActive />, <AssesmentImageInActive />, "/u/assessment", true),
  new MenuPath("MyLibrary", <LibraryImageActive />, <LibraryImageInActive />, "/u/my-library", true),
 
]
