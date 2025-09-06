import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routeConfig from './routes/routeConfig';

const router = createBrowserRouter(routeConfig);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App