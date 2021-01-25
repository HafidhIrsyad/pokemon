import React from 'react';
import { Link } from 'react-router-dom';

function Navbar () {
  return (
    <header class="border-b md:flex md:items-center md:justify-around p-4 pb-0 shadow-lg md:pb-4 bg-green-500 text-white">
      <div class="flex items-center justify-between mb-4 md:mb-0">
        <h1 class="leading-none text-2xl text-grey-darkest">
          <Link class="no-underline text-grey-darkest hover:text-black" to="/">
            Pokemon
          </Link>
        </h1>
      </div>
      <nav>
        <ul class="list-reset md:flex md:items-center">
          <li class="md:ml-4">
            <Link class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="/favorite">
              Favorite
            </Link>
          </li>
          <li class="md:ml-4">
            <a 
              class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" 
              href="https://github.com/mazipan/graphql-pokeapi"
              target="_blank"
              rel="noreferrer"
            >
              Pokemon Resource by Irfan
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;