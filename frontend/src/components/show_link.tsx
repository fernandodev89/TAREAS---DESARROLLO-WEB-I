
import React from 'react'
import { Link } from 'react-router-dom';

export default function ShowLink() {
	const [copied, setCopied] = React.useState(false);
	const textToCopy = "Texto que quiero copiar";

	const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };
	return (
		<div className='show-link'>
			<h1 className="title-link">Esta sera la clave pero no la tengo aun xd</h1>
			<button className="main-Button" onClick={handleCopy}>
				{copied ? '¡Copiado!' : 'Copiar'}
			</button>
			<Link to="/generateLink">
				<button className='main-Button'>Crear un nuevo link secreto </button>
			</Link>
		</div>
	)
}

