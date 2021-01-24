import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_POKEMONS } from '../graphql/Queries'

export default function Pokemon () {
  const gqlVariables = {
    limit: 24,
    offset: 0,
  };
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return <p className="text-center text-3xl mt-5">Please Wait.....</p>;
  if (error) return console.log(`Error: ${error.message}`);

  return(
    <div className="container my-12 mx-auto px-4 md:px-12">
      <p className="text-2xl my-8 text-center px-4 md:px-12">List of Pokemons</p>
      <div className="flex flex-wrap -mx-1 lg:mx-4">
        { data.pokemons && ( data.pokemons.results.map((pokemon, idx) => (
            <Link to="/details">
              <div className="overflow-hidden rounded-lg shadow-lg mx-4 my-4">
                <img src={pokemon.image} width="200rem" height="100rem" alt="PokemonImage"/>
                <p className="text-center -mt-3 mb-4 text-xl">{pokemon.name}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}