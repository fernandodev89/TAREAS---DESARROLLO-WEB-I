import { useState } from "react"

export default function ShowValue() {
	const [inputValue, setInputValue] = useState("");
	const [result, setResult] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
	};

	const handleCheck = () => {
		if (inputValue === "1234") {
			setResult("true");
		}else {
			setResult("false");
		}
	};

	return (
		<div className="create-link">
			<input type="text" className='text-main'value={inputValue} onChange={handleChange} placeholder="Ingrese la clave secreta"/>
			<button className='main-Button' onClick={handleCheck}>Verificar clave</button>
			{result && <h1>{result}</h1>}
		</div>
	)
};