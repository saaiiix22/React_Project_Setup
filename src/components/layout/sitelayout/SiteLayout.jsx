import React from 'react'
import { Outlet } from "react-router-dom";

const SiteLayout = () => {
  return (
    <div><Outlet /></div>
  )
}

export default SiteLayout