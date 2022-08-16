import React from 'react'

import './Login.css'

const Login = () => {

  return (
    <div className="app">
      <div className="login">
        <div className="container">
          <form action="src/pages/Login/Login">
            <h3 className='text-center'>INGRESO</h3>
            <label htmlFor="">Correo</label>
            <input type="email" placeholder='efrain@gmail.com'/>
            <label htmlFor="">Contraseña</label>
            <input type="password" placeholder='********'/>
            <div className="remember">
              <input type="checkbox"/>
              <p>Remember me</p>
            </div>
            <button> Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
