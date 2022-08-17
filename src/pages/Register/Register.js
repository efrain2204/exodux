import React, {useEffect, useState} from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../Login/Login.css'

// Obtener los valores de localstorage
const getData = () =>{
  const data = localStorage.getItem('users');
  if(data) return JSON.parse(data);
  else return [];
}

const Register = () => {

  let navigate = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    type_user: "cliente",
    password: ""
  })
  const [users,setUsers] = useState( getData() );

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  }
  const handleMessage= (msg)=> {
    toast.error(msg, {
      position: "top-center",
    });
  }

  const onSubmitRegister = (e) => {
    e.preventDefault();
    const { name, email, password } = inpval;
    if (name === "") handleMessage("Nombre requerido");
    else if (email === "") handleMessage("Email requerido");
    else if (!email.includes("@")) handleMessage("Debe ingresar un correo");
    else if (password === "") handleMessage("Password requerido");
    else if (password.length < 5) handleMessage("Password mayor a 5 caracteres");
    else {
      let user = {
        name,
        email,
        type_user: "cliente",
        password
      }
      setUsers([...users ,user])
      toast.success("Usuario registrado", {
        position: "top-center",
      });
      setTimeout(()=>{
        navigate("/", { replace: true });
      },2000);
    }
  }
  useEffect(() => {
    localStorage.setItem('users',JSON.stringify(users));
  },[users])

  return (
    <div className="app">
      <div className="login">
        <div className="container-RL">

          <form onSubmit={onSubmitRegister}>
            <h3 className='text-center'>Registro</h3>
            <label htmlFor="">Nombre</label>
            <input type="text" onChange={getdata} name='name' placeholder='Ingrese su nombre'/>

            <label htmlFor="">Email</label>
            <input type="email" onChange={getdata} name='email' placeholder='tucorreo@gmail.com'/>

            <label htmlFor="">Password</label>
            <input type="password" onChange={getdata} name='password' placeholder='********'/>

            <button type='submit'> Registrar</button>
            <span>Si ya tiene cuente <NavLink to="/">ingrese aqui</NavLink></span>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
