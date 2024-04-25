import { useState } from 'react';
import { ImageModal } from '../ImageModal/ImageModal';
import css from './ImageCard.module.css';

export const ImageCard = ({
  urls,
  alt,
  color,
  numberOfLikes,
  title,
  location,
  photographer,
  instagramId,
}) => {
  const [showModal, setShowModal] = useState(false);
  const toggle = () => {
    setShowModal(prevModal => !prevModal);
  };
  return (
    <div>
      <div
        className={css.photoCard}
       
        style={{ backgroundColor: color, borderColor: color }}
      >
        <img className={css.img} src={urls.small} alt={alt} onClick={toggle}/>
      </div>
      <ImageModal
        alt={alt}
        urls={urls}
        modalIsOpen={showModal}
        closeModal={toggle}
        color={color}
        likes={numberOfLikes}
        descriptions={title}
        location={location}
        photographerName={photographer}
        instId={instagramId}
      />
    </div>
  );
};