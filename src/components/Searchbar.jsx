import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="p-2 text-gray-400 focus-within:text-gray-600"
    >
      <label htmlFor="search-field" className="sr-only">
        Search All Songs
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="h-6 w-6 ml-4" />
        <input
          name="seach-field"
          placeholder="Search"
          value={searchTerm}
          type="search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
          id="search-field"
          autoComplete="off"
        />
      </div>
    </form>
  );
};

export default Searchbar;
