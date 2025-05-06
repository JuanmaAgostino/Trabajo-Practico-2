import React, { useState } from 'react';
import '../style/Formulario.css';

const Formulario = ({ verificarSesion }) => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const manejarCambioUsuario = (e) => {
        setUsuario(e.target.value);
    };

    const manejarCambioContrasena = (e) => {
        setContrasena(e.target.value);
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        // Lógica de validación aquí
        if (usuario && contrasena) {
            verificarSesion(); // Cambiado de Verificado a verificarSesion
        } else {
            alert('Por favor, complete todos los campos.');
        }
    };

    return (
        <div className="contenedor-inicio-sesion">
            <form className="formulario-inicio-sesion" onSubmit={manejarEnvio}>
                <div className="grupo-formulario">
                    <label>Usuario:</label>
                    <input
                        type="text"
                        value={usuario}
                        onChange={manejarCambioUsuario}
                        required
                    />
                </div>
                <div className="grupo-formulario">
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={contrasena}
                        onChange={manejarCambioContrasena}
                        required
                    />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Formulario;