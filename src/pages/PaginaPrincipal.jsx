import React, { useState } from 'react';
import HeaderInicioSesion from '../components/HeaderInicioSesion';
import HeaderBienvenida from '../components/HeaderBienvenida';
import Footer from '../components/Footer';
import Main from '../components/Main';

const PaginaPrincipal = ({ alumno1, alumnoL, alumnoc, alumnoN, alumnoLu }) => {
	const [usuarioVerificacion, setUsuarioVerificacion] = useState(false);

	const Verificado = () => {
		setUsuarioVerificacion(true);
	};

	const handleLogout = () => {
		setUsuarioVerificacion(false);
	};

	const alumnos = [alumno1, alumnoL, alumnoc, alumnoN, alumnoLu];

	return (
		<div>
			{usuarioVerificacion ? (
				<HeaderBienvenida onLogout={handleLogout} />
			) : (
				<HeaderInicioSesion />
			)}
			<Main
				usuarioVerificacion={usuarioVerificacion}
				Verificado={Verificado}
				alumno1={alumno1}
				alumnoL={alumnoL}
				alumnoc={alumnoc}
				alumnoN={alumnoN}
				alumnoLu={alumnoLu}
			/>
			<Footer alumnos={alumnos} />
		</div>
	);
};

export default PaginaPrincipal;
