import PokemonImages from '../assets/pokemon.svg'

export default function Banner () {
  return (
    <div className="container mx-auto flex justify-around items-center">
      <div>
        <p className="text-2xl">We do have a lot in common.</p>
        <p className="text-xl">The same earth, the same air and the same sky.</p>
        <p className="text-xl">Maybe if we started looking at what is the same,</p>
        <p className="text-xl">instead of looking at what is different, well, who knows?</p>
        <p className="text-xl">-Meowth</p>
      </div>
      <img src={PokemonImages} alt="Pokemon Banner" className="mt-4"/>
    </div>
  );
}