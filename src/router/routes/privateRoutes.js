// Export all the private routes

import React from "react"

const Dashboard = React.lazy(() => import("../../pages/dashboard/index"))
const Assessment = React.lazy(() => import("../../pages/assessment/index"))
const MyLibrary = React.lazy(() => import("../../pages/myLibrary/index"))


export const PrivateRoutes = [
  { path: "/u/dashboard", exact: true, component: Dashboard },
  { path: "/u/assessment", exact: true, component: Assessment },
   { path: "/u/my-library", exact: true, component: MyLibrary },
]
