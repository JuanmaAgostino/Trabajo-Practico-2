import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import HeaderInicioSesion from '../components/HeaderInicioSesion';
import HeaderBienvenida from '../components/HeaderBienvenida';
import Footer from '../components/Footer';
import Main from '../components/Main';
import AgregarAlumno from '../components/AgregarAlumno';

// Componente interno que estará dentro del contexto de Router
const ContenidoPrincipal = ({ sesionVerificada, setSesionVerificada, alumnos, setAlumnos }) => {
    const navegar = useNavigate();

    const verificarSesion = () => {
        setSesionVerificada(true);
    };

    const cerrarSesion = () => {
        setSesionVerificada(false);
        navegar('/'); // Redirige a la página de inicio
    };

    const agregarAlumno = (nuevoAlumno) => {
        setAlumnos([...alumnos, nuevoAlumno]);
    };

    return (
        <div>
            {sesionVerificada ? (
                <HeaderBienvenida onLogout={cerrarSesion} />
            ) : (
                <HeaderInicioSesion />
            )}
            <Routes>
                <Route
                    path="/"
                    element={
                        <Main
                            sesionVerificada={sesionVerificada}
                            verificarSesion={verificarSesion}
                            alumnos={alumnos}
                            agregarAlumno={agregarAlumno}
                        />
                    }
                />
                <Route
                    path="/agregar-alumno"
                    element={<AgregarAlumno agregarAlumno={agregarAlumno} sesionVerificada={sesionVerificada} />}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer alumnos={alumnos} />
        </div>
    );
};

const PaginaPrincipal = ({ alumno1, alumnoL, alumnoc, alumnoN, alumnoLu, alumnoF }) => {
    const [sesionVerificada, setSesionVerificada] = useState(false);
    const [alumnos, setAlumnos] = useState([alumno1, alumnoL, alumnoc, alumnoN, alumnoLu, alumnoF]);

    return (
        <Router>
            <ContenidoPrincipal
                sesionVerificada={sesionVerificada}
                setSesionVerificada={setSesionVerificada}
                alumnos={alumnos}
                setAlumnos={setAlumnos}
            />
        </Router>
    );
};

export default PaginaPrincipal;