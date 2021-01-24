import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getDetails } from "../services/PokemonService"

export default function Details () {
  const {url} = useParams()
  const [details, setDetails] = useState()

  useEffect(() => {
    getPokemon()
  }, [url])

  const getPokemon = async () => {
    let res = await getDetails(url)
    setDetails(res)
  }

  return (
    <div>
      <p>Poekmon Details</p>
      <div>
        { details && details.map(detail => (
          <p>{detail.abilities.ability.name}</p>
        ))}
      </div>
    </div>
  )
}