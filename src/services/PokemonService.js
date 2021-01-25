const POKEMON_DATA = 'pokemon_data'

export const Favorites = {
  get: () => {
    const pokemon = localStorage.getItem(POKEMON_DATA);
    console.log(pokemon)
    return JSON.parse(pokemon);
  },
  set: (value) => {
    localStorage.setItem(POKEMON_DATA, JSON.stringify(value));
  },
  remove: () => {
    localStorage.removeItem(POKEMON_DATA);
  }
}