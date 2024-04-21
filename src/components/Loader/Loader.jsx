import { MagnifyingGlass, ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export const ModalLoader = () => {
  return (
    <div className={css.modalLoader}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="orange"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export const Loader = () => {
  return (
    <div className={css.mainLoader}>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="orange"
      />
    </div>
  );
};