import React from 'react';
import css from '../style/Integrantes.css';

const Integrantes = ({ alumno1, alumnoL, alumnoc, alumnoN, alumnoLu, alumnoF}) => {
	return (
		<body>
			<div className="contenedor">
				<div className="tarjeta">
					<ul>
						<li>{alumno1.nombre}</li>
						<li>{alumno1.apellido}</li>
						<li>{alumno1.legajo}</li>
						<li>
							<a href={alumno1.github}>Github</a>
						</li>
						<li>
							<figure>
								<img
									src={require(`../resources/${alumno1.foto}`)}
									alt="foto alumno Juanma"
								/>
							</figure>
						</li>
					</ul>
				</div>

				<div className="tarjeta">
					<ul>
						<li>{alumnoLu.nombre}</li>
						<li>{alumnoLu.apellido}</li>
						<li>{alumnoLu.legajo}</li>
						<li>
							<a href={alumnoLu.github}>Github</a>
						</li>
						<li>
							<figure>
								<img
									src={require(`../resources/${alumnoLu.foto}`)}
									alt="foto alumno Luciano"
								/>
							</figure>
						</li>
					</ul>
				</div>


				<div className="tarjeta">
					<ul>
						<li>{alumnoL.nombre}</li>
						<li>{alumnoL.apellido}</li>
						<li>{alumnoL.legajo}</li>
						<li>
							<a href={alumnoL.github}>Github</a>
						</li>
						<li>
							<figure>
								<img
									src={require(`../resources/${alumnoL.foto}`)}
									alt="foto alumno Lucas"
								/>
							</figure>
						</li>
					</ul>
				</div>

				<div className="tarjeta">
					<ul>
						<li>{alumnoc.nombre}</li>
						<li>{alumnoc.apellido}</li>
						<li>{alumnoc.legajo}</li>
						<li>
							<a href={alumnoc.github}>Github</a>
						</li>
						<li>
							<figure>
								<img
									src={require(`../resources/${alumnoc.foto}`)}
									alt="foto alumno christian"
								/>
							</figure>
						</li>
					</ul>
				</div>

				<div className="tarjeta">
					<ul>
						<li>{alumnoN.nombre}</li>
						<li>{alumnoN.apellido}</li>
						<li>{alumnoN.legajo}</li>
						<li>
							<a href={alumnoN.github}>Github</a>
						</li>
						<li>
							<figure>
								<img
									src={require(`../resources/${alumnoN.foto}`)}
									alt="foto alumno Nicolas"
								/>
							</figure>
						</li>
					</ul>
				</div>
				<div className="tarjeta">
					<ul>
						<li>{alumnoF.nombre}</li>
						<li>{alumnoF.apellido}</li>
						<li>{alumnoF.legajo}</li>
						<li>
							<a href={alumnoF.github}>Github</a>
						</li>
						<li>
							<figure>
								<img
									src={require(`../resources/${alumnoF.foto}`)}
									alt="foto alumno fran"
								/>
							</figure>
						</li>
					</ul>
				</div>
			</div>
		</body>
	);
};

export default Integrantes;
