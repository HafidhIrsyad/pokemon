import { Link } from 'react-router-dom';

function Navbar () {
  return (
    <header className="h-full bg-green-500 ">
      <nav className="flex justify-around h-24 items-center text-white">
        <div>
          <Link to="/" className="text-3xl">Pokemon</Link>
        </div>
        <ul className="flex justify-between">
          <li>
            <Link to="/favorite" className="text-lg">Favorite</Link>
          </li>
          <li>
            <a 
              href="https://github.com/mazipan/graphql-pokeapi" 
              target="_blank"
              rel="noreferrer" 
              className="text-lg ml-10">Pokemon Resource by Irfan Maulana
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;