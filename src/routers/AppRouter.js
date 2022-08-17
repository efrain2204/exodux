import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import DashboardRoutes from "./DashboardRoutes";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <PublicRoute>
              <Login/>
            </PublicRoute>
          }
        />
        <Route
          path='/dashboard/*'
          element={
            <PrivateRoute>
              <DashboardRoutes/>
            </PrivateRoute>
          }
        />
        <Route
          path='/register'
          element={
            <PublicRoute>
              <Register/>
            </PublicRoute>
          }
        />
        <Route
          path='/*'
          element={
          <Navigate to="/"/>}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
