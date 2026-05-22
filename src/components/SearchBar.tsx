import { Search } from 'lucide-react';
import './SearchBar.css';
import { useState, type ChangeEvent } from 'react';

const SearchBar = ({ city, setCity }: { city: string; setCity: (city: string) => void }) => {
  const [input, setInput] = useState<string>('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    if (input.trim()) {
      setCity(input);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
      setInput('');
    }
  };

  return (
    <div id="searchBox">
      <Search size={18} strokeWidth={3} id="searchIcon" />
      <input
        type="search"
        className="search"
        aria-label="Enter your city name"
        placeholder={`${city}...`}
        value={input}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
