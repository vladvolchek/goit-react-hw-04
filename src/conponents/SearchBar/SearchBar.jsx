import toast from 'react-hot-toast';
import css from './SearchBar.module.css';
import { FiSearch } from 'react-icons/fi';

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.elements.query.value.trim() === '') {
      toast.error('Empty string!');

      return;
    }

    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.btn} type="submit">
          <FiSearch size="20px" />
        </button>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};