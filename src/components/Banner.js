import React from 'react';
import PokemonImages from '../assets/pokemon.svg'

export default function Banner () {
  return (
    <div className="container md:flex md:justify-around md:items-center lg:flex lg;justify-around lg:items-center mt-7">
      <div className="md:ml-96">
        <p className="lg:text-2xl md:text-sm md:text-center lg:text-justify">We do have a lot in common.</p>
        <p className="lg:text-xl md:text-sm md:text-center lg:text-justify">The same earth, the same air and the same sky.</p>
        <p className="lg:text-xl md:text-sm md:text-center lg:text-justify">Maybe if we started looking at what is the same,</p>
        <p className="lg:text-xl md:text-sm md:text-center lg:text-justify">instead of looking at what is different, well, who knows?</p>
        <p className="lg:text-xl md:text-sm md:text-center lg:text-justify">-Meowth</p>
      </div>
      <img src={PokemonImages} alt="Pokemon Banner" className="my-6 w-60 h-48 md:w-60 md:h-auto mx-auto mb-10"/>
    </div>
  );
}