import PaginaPrincipal from './pages/PaginaPrincipal';

function App() {
	const alumno1 = {
		nombre: 'Juan Manuel',
		apellido: 'Agostino Colombres',
		legajo: 61131,
		github: 'https://github.com/JuanmaAgostino',
		foto: 'fotoAgostino.jpeg',
	};

	const alumnoL = {
		nombre: 'Lucas Ismael',
		apellido: 'Leon',
		legajo: 61335,
		github: 'https://github.com/LuquitasLeon',
		foto: 'fotoLucas.jpeg',
	};
	const alumnoc = {
		nombre: 'Christian Gabriel ',
		apellido: 'Diaz',
		legajo: 61337,
		github: 'https://github.com/christian22854',
		foto: 'fotoGamu.jpeg',
	};

	const alumnoN = {
		nombre: 'Santiago Nicolas',
		apellido: 'Ferreyra Appas',
		legajo: 61198,
		github: 'https://github.com/Ercutt',
		foto: 'fotoNicolas.jpeg',
	};

	const alumnoLu = {
		nombre: 'Luciano Agustin',
		apellido: 'Llanos',
		legajo: 61911,
		github: 'https://github.com/LucianoLlanos',
		foto: 'fotoLuciano.jpeg',
	};

	const alumnoF = {
		nombre: 'Francisco Miguel',
		apellido: 'Palacios',
		legajo: 61024,
		github: 'https://github.com/260IQ',
		foto: 'franfran.jpeg',
	};

	return (
		<div>
			<PaginaPrincipal
				alumno1={alumno1}
				alumnoL={alumnoL}
				alumnoc={alumnoc}
				alumnoN={alumnoN}
				alumnoLu={alumnoLu}
				alumnoF={alumnoF}
			/>
		</div>
	);
}

export default App;
