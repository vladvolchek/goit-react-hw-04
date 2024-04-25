import { useState } from 'react';
import css from './SearchBar.module.css';
import { MdOutlineImageSearch } from 'react-icons/md';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export const ErrorMessage = ({ children }) => {
  useEffect(() => {
   
    const timeoutId = setTimeout(() => {
      toast.error(children, {
        duration: 2000,
      });
    }, 0);

   
    return () => clearTimeout(timeoutId);
  }, [children]);

  
  return null;
};
export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
    
  };

  return (
    <header>
      <div className={css.container}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
            value={query}
            onChange={handleChange}
          />
          <button className={css.button} type="submit">
            <MdOutlineImageSearch className={css.svg} size="30px" />
          </button>
        </form>
      </div>
    </header>
  );
};