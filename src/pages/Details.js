import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Banner from '../components/Banner';
import Footer from '../components/Footer';

export default function Details () {
  const { url } = useParams();
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${url}/`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [url]);

  return (
    <>
      <Banner />
      <div className="container mx-auto mb-4">
        <div className="flex justify-center items-center">
          { pokemon && (
            <div>
              { pokemon.sprites && (
                <img className="w-48 h-32 md:w-48 md:h-auto md:rounded-none mx-auto" src={pokemon.sprites.other.dream_world.front_default} alt="" width="384" height="512"/>
              )}
              <p className="font-semibold text-gray-700 text-center bg-yellow-200 rounded-full px-3 py-1 my-3 mx-2">Pokemon Abilities</p>
              <div className="flex justify-center">
                { pokemon.abilities && pokemon.abilities.map(abilitie => (
                  <p className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2">{abilitie.ability.name}</p>
                ))}
              </div>
              <p className="font-semibold text-gray-700 text-center bg-yellow-200 rounded-full px-3 py-1 my-3 mx-2">Pokemon Moves</p>
              <div>
                { pokemon.moves && pokemon.moves.map(move => (
                  <p className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2">{move.move.name}</p>
                ))}
              </div>
              <p className="font-semibold text-gray-700 text-center bg-yellow-200 rounded-full px-3 py-1 my-3 mx-2">Game Indices</p>
              <div>
                { pokemon.game_indices && pokemon.game_indices.map(indice => (
                  <p className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2">{indice.version.name}</p>
                ))}
              </div>
              <p className="font-semibold text-gray-700 text-center bg-yellow-200 rounded-full px-3 py-1 my-3 mx-2">Pokemon Species</p>
              <div className="flex justify-center">
                { pokemon.species && 
                  <p className="text-center inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2">{pokemon.species.name}</p>
                }
              </div>
              <p className="font-semibold text-gray-700 text-center bg-yellow-200 rounded-full px-3 py-1 my-3 mx-2">Pokemon Types</p>
              <div className="flex justify-center">
                { pokemon.types && pokemon.types.map(type => (
                  <p className="text-center inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2">{type.type.name}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}