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
	alumnoLu
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
						alumnoLu={alumnoLu}
					/>
				) : (
					<Formulario Verificado={Verificado} />
				)}
			</main>
		</div>
	);
};

export default Main;
