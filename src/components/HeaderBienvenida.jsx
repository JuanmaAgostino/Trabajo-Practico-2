import React from 'react';
import '../style/Header.css';

const HeaderBienvenida = ({ onLogout }) => {
  return (
    <header className="headerB">
      <span className="iconoB">🔒</span>
      <h1>Bienvenido</h1>
      <button className="logout-boton" onClick={onLogout}>
        Cerrar Sesión
      </button>
    </header>
  );
};

export default HeaderBienvenida;