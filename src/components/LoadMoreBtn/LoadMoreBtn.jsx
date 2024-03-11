import css from './LoadMoreBtn.module.css';
export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={css.loadMoreBtn} onClick={onClick}>
      Load More
    </button>
  );
};