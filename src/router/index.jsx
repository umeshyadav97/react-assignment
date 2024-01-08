import React, { Suspense } from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { PrivateRoutes } from "./routes";
import AppLoader from "../components/Loader/AppLoader";
// import PublicLayout from "layout/publicLayout";
import PrivateLayout from "../components/layout";
import { DashboardMenus } from "./routes/dashboardRoutes";

const Router = () => {
  console.log();
  return (
    <Suspense fallback={<AppLoader visible={true} />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/u/dashboard" replace />} />
          {/* All the public routes */}

          {/* All the private routes */}
          {PrivateRoutes.map(({ component: Component, ...route }) => (
            <Route key={`Route-${route.path}`} element={<PrivateLayout />}>
              <Route
                path={route.path}
                element={
                  // isLoggedIn !== true ? (
                  //   <Navigate to="/auth/login" replace={true} />
                  // ) : (
                  <Component />
                  //   )
                }
              />
            </Route>
          ))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
