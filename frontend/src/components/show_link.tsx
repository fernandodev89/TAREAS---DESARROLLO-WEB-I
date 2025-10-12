
import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";


export default function ShowLink() {
	const [copied, setCopied] = React.useState(false);
	const location = useLocation();
	const textCopy = location.state?.data?.key || '';

	const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };
	return (
		<div className='show-link'>
			<h1 className="title-link">{textCopy}</h1>
			<button className="main-Button" onClick={handleCopy}>
				{copied ? '¡Copiado!' : 'Copiar'}
			</button>
			<Link to="/generateLink">
				<button className='main-Button'>Crear un nuevo link secreto </button>
			</Link>
			<Link to="/showValue">
				<button className='main-Button'>Revelar valor oculto</button>
			</Link>
		</div>
	)
}

