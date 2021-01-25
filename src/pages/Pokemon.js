import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../graphql/Queries'
import { Favorites } from '../services/PokemonService'
import swal from 'sweetalert';


const Pokemon = () => {
  const gqlVariables = {
    limit: 25,
    offset: 1,
  };

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return <p className="text-center text-3xl mt-5">Please Wait.....</p>;
  if (error) return console.log(`Error: ${error.message}`);

  return(
    <div className="container my-12 mx-auto px-4 md:px-12">
      <p className="text-2xl my-8 text-center px-4 md:px-12">List of Pokemons</p>
      <PokemonList data={data} />
    </div>
  )
}

const PokemonList = ({ data }) => {
  const [pokemonList, setPokemonList] = useState(data);
  const [favorite, setFavorite] = useState();

  useEffect(() => {
    if (data){
      const favoriteAPI = Favorites.get();
      setPokemonList(data);
      setFavorite(favoriteAPI);
    } 
  }, [data]);


  const addTofavorite = (pokemon) => {
    let favoriteAPI = Favorites.get()
    let favoriteTemp = [];
    if (favoriteAPI?.length === 0 || !favoriteAPI) {
      favoriteTemp = [pokemon]
      Favorites.set(favoriteTemp)
    } else {
      let foundFavorite = favoriteAPI.find(x => x.name === pokemon.name)
      if (!foundFavorite) {
        favoriteTemp = favoriteAPI
        favoriteTemp.push(pokemon)
        Favorites.set(favoriteTemp)
        swal("Success Add to Favorite", " ", "success");
      } else {
        swal("Data has been favorite", " ", "error");
      }
    }
    setFavorite(favoriteTemp);
  }

  const updateItem = (item) => {
    return !!favorite?.find(x => x.name === item.name)
  }

  const removeFromFavorite = (pokemon) => {
    let favoriteTemp = [...favorite]
    const idx = favoriteTemp.findIndex(x => x.name === pokemon.name)
    favoriteTemp.splice(idx, 1)
    setFavorite(favoriteTemp);
    Favorites.set(favoriteTemp);
    setPokemonList(pokemonList);
    swal("Success Remove From Favorite", " ", "error")
  }

  return (
    <div className="md:flex md:flex-wrap -mx-1 lg:mx-4">
      { pokemonList.pokemons && (pokemonList.pokemons.results.map((pokemon, idx) => {
        const splitUrl = pokemon.url.split('/')
        return (
          <div className="overflow-hidden rounded-lg shadow-lg mx-4 my-4" key={idx}>
            <img src={pokemon.image} width="200" height="150" alt="PokemonImage" className="mx-auto"/>
            <p className="text-center -mt-3 mb-4 text-xl">{pokemon.name}</p>
            <Link 
              to={`/details/${splitUrl[splitUrl.length - 2]}`} 
              key={idx} 
              className="text-center inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2"
            >
              Pokemon Detail
            </Link>
            { updateItem(pokemon) ? 
              <button 
                className="text-center inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2"
                onClick={() => {removeFromFavorite(pokemon)}}
              >
                Remove
              </button> : <button 
              className="text-center inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2"
              onClick={() => {addTofavorite(pokemon, idx)}}
              >
                Add
              </button>
            }
          </div>
        )}
      ))}
    </div>
  )
}

export default Pokemon;

