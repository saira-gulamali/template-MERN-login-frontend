import React from "react";
import { Route, Navigate } from "react-router-dom";
// import { useUserContext } from '../context/user_context'
import { useGlobalContext } from "../authContext";

const PrivateRoute = ({ children }) => {
  const { user } = useGlobalContext();

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
export default PrivateRoute;
