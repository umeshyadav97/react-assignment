import { useNavigate } from "react-router-dom";
import React from "react";

export const usePrivateLayoutController = (props) => {
  const navigateTo = useNavigate();
  const currentRoute = window.location.pathname;

  const navigate = (route) => {
    navigateTo(route);
  };

  const activeMenu = (item) => currentRoute.includes(item.route);

  return {
    navigate,
    activeMenu,
  };
};
