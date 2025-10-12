import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function CreateLink() {

	const [valueText, setValue] = useState('')

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value);
	};

	return (
		<div className="create-link">
			<textarea className="textValue" value={valueText} onChange={handleChange} placeholder='¿Cual es tu secreto?' />
			<Link to="/showLink">
				<button className='main-Button'>Crear un link secreto </button>
			</Link>
		</div>
	)
}
