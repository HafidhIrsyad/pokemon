import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import { Favorites } from '../services/PokemonService'
import SadPokemon from '../assets/bg_favorite.svg'

const Favorite = () => {
  const [favorite, setFavorite] = useState();

  useEffect(() => {
    const pokemons = Favorites.get()
    setFavorite(pokemons);
  },[]);

  const removeFromFavorite = (idx) => {
    let favoriteTemp = [...favorite]
    favoriteTemp.splice(idx, 1)
    setFavorite(favoriteTemp);
    Favorites.set(favoriteTemp);
  }

  return (
    <>
      <Banner />
      <div className="justify-center items-center md:flex md:flex-wrap -mx-1 lg:mx-4">
        { favorite?.length !== 0 ? (favorite?.map((pokemon, idx) => {
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
              <button 
                className="text-center inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2"
                onClick={() => {removeFromFavorite(idx)}}
              >
                Remove
              </button>
            </div>
          )}
        )) :
          <>
            <img src={SadPokemon} alt="" width="200" height="100"/>
            <p className="text-3xl text-black-600 md:ml-5">No Data in Favorite :(((((</p>
          </>  
        } 
      </div>
    </>
  )
}

export default Favorite;