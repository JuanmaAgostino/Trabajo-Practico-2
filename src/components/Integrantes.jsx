import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Integrantes.css';

const Integrantes = ({ alumnos }) => {
    const navegar = useNavigate();
    const [cacheImagenes, setCacheImagenes] = useState({});

    useEffect(() => {
        const cache = {};
        alumnos.forEach((alumno) => {
            if (alumno.foto) {
                const imagen = new Image();
                imagen.src = typeof alumno.foto === 'string' && !alumno.foto.startsWith('data:')
                    ? require(`../resources/${alumno.foto}`)
                    : alumno.foto;
                imagen.onerror = () => (cache[alumno.foto] = require('../resources/default.jpg'));
                cache[alumno.foto] = imagen.src || require('../resources/default.jpg');
            }
        });
        setCacheImagenes(cache);
    }, [alumnos]);

    const manejarAgregarAlumno = () => {
        navegar('/agregar-alumno');
    };

    return (
        <div className="contenedor">
            {alumnos.map((alumno, indice) => (
                <div className="tarjeta" key={indice}>
                    <ul>
                        <li>{alumno.nombre}</li>
                        <li>{alumno.apellido}</li>
                        <li>{alumno.legajo}</li>
                        <li>
                            <a href={alumno.github}>Github</a>
                        </li>
                        <li>
                            <figure>
                                <img
                                    src={cacheImagenes[alumno.foto] || require('../resources/default.jpg')}
                                    alt={`foto alumno ${alumno.nombre}`}
                                    style={{ display: 'block' }}
                                />
                            </figure>
                        </li>
                    </ul>
                </div>
            ))}
            <button className="boton-agregar" onClick={manejarAgregarAlumno}>
                Agregar Alumno
            </button>
        </div>
    );
};

export default Integrantes;