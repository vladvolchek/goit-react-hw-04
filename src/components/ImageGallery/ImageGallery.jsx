import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.list}>
      {images.map(
        ({
          id,
          alt_description,
          urls,
          color,
          likes,
          description,
          user: { location, name, instagram_username },
        }) => (
          <li key={id}>
            <ImageCard
              color={color}
              alt={alt_description}
              urls={urls}
              numberOfLikes={likes}
              title={description}
              location={location}
              photographer={name}
              instagramId={instagram_username}
            />
          </li>
        )
      )}
    </ul>
  );
};