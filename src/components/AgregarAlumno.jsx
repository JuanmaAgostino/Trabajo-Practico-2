import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/AgregarAlumno.css';

const AgregarAlumno = ({ agregarAlumno }) => {
    const [nuevoAlumno, setNuevoAlumno] = useState({
        nombre: '',
        apellido: '',
        legajo: '',
        github: '',
        foto: '',
    });
    const [archivoFoto, setArchivoFoto] = useState(null);
    const navegar = useNavigate();

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setNuevoAlumno({ ...nuevoAlumno, [name]: value });
    };

    const manejarCambioArchivo = (e) => {
        const archivo = e.target.files[0];
        setArchivoFoto(archivo);
        if (archivo) {
            const lector = new FileReader();
            lector.onloadend = () => {
                setNuevoAlumno({ ...nuevoAlumno, foto: lector.result });
            };
            lector.readAsDataURL(archivo);
        } else {
            setNuevoAlumno({ ...nuevoAlumno, foto: '' });
        }
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (!nuevoAlumno.nombre || !nuevoAlumno.apellido || !nuevoAlumno.legajo) {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }
        const datosNuevoAlumno = {
            ...nuevoAlumno,
            github: nuevoAlumno.github || '#',
        };
        agregarAlumno(datosNuevoAlumno);
        navegar('/');
    };

    return (
        <div className="contenedor-formulario">
            <h2>Agregar Nuevo Alumno</h2>
            <form onSubmit={manejarEnvio}>
                <div className="grupo-formulario">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={nuevoAlumno.nombre}
                        onChange={manejarCambio}
                        required
                    />
                </div>
                <div className="grupo-formulario">
                    <label>Apellido:</label>
                    <input
                        type="text"
                        name="apellido"
                        value={nuevoAlumno.apellido}
                        onChange={manejarCambio}
                        required
                    />
                </div>
                <div className="grupo-formulario">
                    <label>Legajo:</label>
                    <input
                        type="text"
                        name="legajo"
                        value={nuevoAlumno.legajo}
                        onChange={manejarCambio}
                        required
                    />
                </div>
                <div className="grupo-formulario">
                    <label>URL de GitHub (opcional):</label>
                    <input
                        type="text"
                        name="github"
                        value={nuevoAlumno.github}
                        onChange={manejarCambio}
                    />
                </div>
                <div className="grupo-formulario">
                    <label>Adjuntar Foto (opcional):</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={manejarCambioArchivo}
                    />
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onClick={() => navegar('/')}>Cancelar</button>
            </form>
        </div>
    );
};

export default AgregarAlumno;