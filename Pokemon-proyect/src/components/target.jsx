import { useEffect,useState } from 'react'
import { fet } from '../api/api'

function Target(){

	const [pokemons, setPokemons] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(()=>{
		async function fetchData() {
			try {
				const pokemons = await fet();
				setPokemons(pokemons);
				setLoading(false);
			} catch (error) {
				console.log(error)	
			}

		}
		fetchData()
	},[]);

	if (loading) return <p>Cargando pokemones...</p>
	return(
		<div className='target'>
			{pokemons.map((pokemon) =>(
				<div key={pokemon.id} className='pokemon-card'>
					<h2 className="pokemon-name">{pokemon.name}</h2>
					<img src={pokemon.img} alt="" />
					<p className="pokemon-species">ESPECIE:" {pokemon.species} "</p>
				</div>
			))}
		</div>
	)
}

export default Target