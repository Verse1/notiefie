import { Fragment } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="flex-grow px-4 py-2 focus:outline-none"
        />
        <button
          type="submit"
          className="group px-2 transition-colors duration-150 focus:bg-black ">
          <FaSearch
            size={20}
            className={
              ' mr-1 h-5 w-5 transition-colors duration-150 group-hover:text-blue-800 group-focus:text-white'
            }
            aria-hidden="true"
          />
        </button>
      </form>
    </Fragment>
  );
};

export default Search;
