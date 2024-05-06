
import css from './ImageCard.module.css';

export const ImageCard = ({
  urls,
  getImageInfo,
  alt,
  color,
  numberOfLikes,
  title,
  location,
  photographer,
  instagramId,
}) => {
  const handleclick = () => {
    getImageInfo ({urls, alt, color, numberOfLikes, title,location, photographer, instagramId})
  }
  return (
    <div>
      <div
        className={css.photoCard}
       
        style={{ backgroundColor: color, borderColor: color }}
      >
        <img className={css.img} src={urls.small} alt={alt} onClick={handleclick}/>
      </div>
      
    </div>
  );
};