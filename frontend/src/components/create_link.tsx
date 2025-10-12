import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function CreateLink() {
  const [valueText, setValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/hide/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: valueText }),
      });

      if (!response.ok) throw new Error("Error al enviar los datos");

      const data = await response.json();

      navigate("/showLink", { state: { data } });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="create-link">
      <form onSubmit={handleSubmit} className='form-create'>
        <textarea
          className="textValue"
          value={valueText}
          onChange={handleChange}
          placeholder="¿Crequireduál es tu secreto?"
          required
        />
        <button type="submit" className="main-Button">
          Crear un link secreto
        </button>
      </form>
      <Link to="/showValue">
        <button className='main-Button'>Revelar valor oculto</button>
      </Link>
    </div>
  );
}