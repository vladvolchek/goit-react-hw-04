import css from './ImageCard.module.css';
import { ImageModal } from '../Image Modal/ImageModal';
import { useState } from 'react';

export const ImageCard = ({ item }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className={css.cardItem}>
      <ImageModal item={item} closeModal={closeModal} modalIsOpen={modalIsOpen} />
      <img
        src={item.urls.small}
        alt={item.alt_description}
        onClick={openModal}
        className={css.card}
      />
    </div>
  );
};