import React from 'react';
import Formulario from './Formulario';
import '../style/Main.css';
import Integrantes from './Integrantes';

const Main = ({ sesionVerificada, verificarSesion, alumnos, agregarAlumno }) => {
	return (
		<div>
			<main>
				{sesionVerificada ? (
					<Integrantes
						alumnos={alumnos}
						agregarAlumno={agregarAlumno}
					/>
				) : (
					<Formulario verificarSesion={verificarSesion} />
				)}
			</main>
		</div>
	);
};

export default Main;