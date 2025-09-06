import React from "react";
import SiteLayout from "../components/layout/sitelayout/siteLayout";
import Home from "../pages/homepage/Home";
import ROUTE_PATHS from "./routePaths";

const routeConfig = [
  {
    path: "/",
    element: <SiteLayout/> ,
    children: [
      { 
        path: ROUTE_PATHS.HOME, 
        element: <Home />, 
        index:true
      },
    ],
  },
];

export default routeConfig;
