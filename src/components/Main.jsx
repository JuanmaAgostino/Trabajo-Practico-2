import React from 'react';
import Formulario from './Formulario';
import '../style/Main.css';
import Integrantes from './Integrantes';

const Main = ({
	usuarioVerificacion,
	Verificado,
	alumno1,
	alumnoL,
	alumnoc,
	alumnoN,
}) => {
	console.log(usuarioVerificacion);
	console.log(Verificado);
	return (
		<div>
			<main>
				{usuarioVerificacion ? (
					<Integrantes
						alumno1={alumno1}
						alumnoL={alumnoL}
						alumnoc={alumnoc}
						alumnoN={alumnoN}
					/>
				) : (
					<Formulario Verificado={Verificado} />
				)}
			</main>
		</div>
	);
};

export default Main;
