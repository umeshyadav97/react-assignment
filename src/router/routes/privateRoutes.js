// Export all the private routes

import React from "react"

const Dashboard = React.lazy(() => import("../../pages/dashboard/index"))
const Assessment = React.lazy(() => import("../../pages/assessment/index"))
// const SubAdmins = React.lazy(() => import("pages/private/sub-admins"))
// const Users = React.lazy(() => import("pages/private/users"))
// const Roles = React.lazy(() => import("pages/private/role"))

export const PrivateRoutes = [
  { path: "/u/dashboard", exact: true, component: Dashboard },
  { path: "/u/Assessment", exact: true, component: Assessment },
]
