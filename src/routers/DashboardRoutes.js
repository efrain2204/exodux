import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import HeaderAdmin from "../components/Header/HeaderAdmin";
import HeaderUser from "../components/Header/HeaderUser";
import Administrar from "../pages/Administrar/Administrar";
import CrearUsuarioAdmin from "../pages/Register/CrearUsuarioAdmin";
import Productos from "../pages/Productos/Productos";

const DashboardRoutes = () => {
  const userLogged = JSON.parse(localStorage.getItem("user_logged"));
  return (
    <>
      <Routes>
        <Route path='/'  element={userLogged[0].type_user === 'cliente' ? <HeaderUser/> : <HeaderAdmin/> }>
          <Route index element={ userLogged[0].type_user === 'cliente' ? <Productos/> : <Administrar/>}/>
          <Route  path='crearusuario' element={ <CrearUsuarioAdmin/> }/>

          <Route path='*' element={ <Navigate replace to='/'/> }/>
        </Route>
      </Routes>
    </>
  );
};

export default DashboardRoutes;
