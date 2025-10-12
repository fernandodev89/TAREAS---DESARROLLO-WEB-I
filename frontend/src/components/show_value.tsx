import { useState } from "react"
import { Link } from 'react-router-dom';

export default function ShowValue() {
	const [inputValue, setInputValue] = useState("");
	const [result, setResult] = useState("");
	const [show, setShow] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	};


	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await fetch("http://127.0.0.1:8000/api/reveal/", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ key: inputValue }),
			});

			if (!response.ok) throw new Error("Error al enviar los datos");

			const data = await response.json();
			handleCheck(data.text);

		} catch (err) {
			console.error(err);
		}
	};

	const handleCheck = (validate: string) => {
		if (validate === 'Clave no encontrada o ya utilizada') {
			setResult("Valor no encontrado o ya utilizado");
			setShow(false);
		} else {
			setShow(true);
			setResult(validate);
		}
	};

	return (
		<div className="show-value">
			<form onSubmit={handleSubmit} >
				<input type="text" className='text-main' value={inputValue} onChange={handleChange} placeholder="Ingrese la clave secreta" required/>
				<button className='main-Button' type="submit">{show ? 'Ocultar':'Revelar'}</button>
			</form>
			<Link to="/generateLink">
				<button className='main-Button'>Crear un nuevo link secreto </button>
			</Link>
			{result && 
				<div className="value-result">
					<h3>Este es el valor oculto:</h3>
					<h1>{result}</h1>
				</div>	
			}
		</div>
	)
};