import { Outlet, Navigate } from "react-router-dom";
import React from "react";

const ProtectedRoutes = () => {
  const user = localStorage.getItem("isAuthenticated"); 
  return user ? <Outlet /> : <Navigate to="/LoginSignup" />;
};

export default ProtectedRoutes;
