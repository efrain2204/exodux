import React, { useState } from 'react'
import { NavLink,useNavigate  } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Login.css'

const setAdmin= () =>{
  const data = localStorage.getItem('users');
  let admin = {
    name: "admin",
    email: "admin@gmail.com",
    type_user: "admin",
    password: "123456"
  }
  if(!data) {
    localStorage.setItem('users',JSON.stringify([admin]));
  }
}

const Login = () => {
  setAdmin();
  let navigate = useNavigate();

  const [inpvalue, setInpValue] = useState({
    email: "",
    password: ""
  })
  const [data, setData] = useState([]);

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpValue(() => {
      return {
        ...inpvalue,
        [name]: value
      }
    })

  }
  const handleMessage= (msg)=> {
    toast.error(msg, {
      position: "top-center",
    });
  }

  const onSubmitLogin = (e) => {
    e.preventDefault();
    const getUsers = localStorage.getItem("users");

    const { email, password } = inpvalue;
    if (email === "") handleMessage("Email requerido");
    else if (!email.includes("@")) handleMessage("Debe ingresar un correo");
    else if (password === "") handleMessage("Password requerido");
    else if (password.length < 5) handleMessage("Password mayor a 5 caracteres");
    else {
      if (getUsers && getUsers.length) {
        const userdata = JSON.parse(getUsers);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password
        });
        if (userlogin.length === 0) {
          handleMessage("Credenciales invalidas");
        } else {
          localStorage.setItem("user_logged", JSON.stringify(userlogin))
          navigate("/dashboard", { replace: true });
        }
      }
    }
  }
  return (
    <div className="app">
      <div className="login">
        <div className="container-RL">

          <form onSubmit={onSubmitLogin}>
            <h3 className='text-center'>INGRESO</h3>
            <label htmlFor="">Email</label>
            <input type="email" onChange={getdata} name='email' placeholder='tucorreo@gmail.com'/>

            <label htmlFor="">Password</label>
            <input type="password" onChange={getdata} name='password' placeholder='********'/>

            <label htmlFor="">Usuario admin por defecto</label>
            <small>email: admin@gmail.com</small>
            <small>password: 123456</small>
            <button type='submit'>Log In</button>
            <span>Si no tiene una cuenta <NavLink to="/register">registrese aqui!</NavLink></span>
          </form>

        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
