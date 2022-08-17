import React from 'react';

import {Navigate} from "react-router-dom";

const PublicRoute = ({children}) => {
  const userLogged = localStorage.getItem("user_logged");
  return (
    (!userLogged)
      ? children
      : <Navigate to="/dashboard"/>
  );
};

export default PublicRoute;
