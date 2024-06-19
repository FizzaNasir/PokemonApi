import { useGetAllPokemonsQuery } from '../features/apiSlice';
import { btnStyle } from '../styles'; 
import { Link } from 'react-router-dom';

const AllPokemons = () => {
  const { data, isLoading, isError, error } = useGetAllPokemonsQuery()   

  if (isLoading) {
        return <div>Loading...</div>;
  }
  
  if (isError) {
      return <div>Error: {error.message}</div>;
  }
  return (

    <ul>
        {       
          data.results.map((pokemon, index) => (
            <li>
                <div>Hello World</div>
                <Link to={`/pokemon/${index + 1}`} >
                  <button style={btnStyle}> {pokemon.name} </button>
                </Link>
            </li>
          ))
        }
    </ul>
  );
}

export default AllPokemons