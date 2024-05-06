import { useEffect, useState } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { getPhotos } from './api';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn';
import { Toaster } from 'react-hot-toast';
import { Loader } from './components/Loader/Loader';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import css from './components/ErrorMessage/ErrorMessage.module.css';
import style from './components/Loader/Loader.module.css';
import { ImageModal } from './components/ImageModal/ImageModal';

function App() {
  const [showModal, setShowModal] = useState(false);
  
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [emptyResults, setEmptyResults] = useState(false);
  const [visibleBtn, setVisibleBtn] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);
  const [imageinfo, setImageInfo] = useState(null);
  const onOpenModal = () => {
    setShowModal(true);
  };
  const onCloseModal = () => {
    setShowModal(false);
  };
  const getImageInfo = (imageinfo) => {
    setImageInfo(imageinfo)
    onOpenModal();

  }
  const handleSubmit = async newQuery => {
    if (!newQuery.trim()) {
      setEmptyInput(true);
      // setImages([]);
      // setVisibleBtn(false);
      return;
    }
    setEmptyInput(false);
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImages([]);
    setEmptyResults(false);
    setVisibleBtn(false);
    setError(false);
  };

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { results, total_pages } = await getPhotos(query.trim().split('/')[1], page);
        if (results.length === 0) {
          setEmptyResults(true);
          return;
        }
        // console.log(results);
        setImages(prevImages => [...prevImages, ...results]);
        setVisibleBtn(total_pages !== page);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    setVisibleBtn(true);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} getImageInfo = {getImageInfo} />}
      {emptyInput && <ErrorMessage>Please enter text to search images.</ErrorMessage>}
      {emptyResults && <ErrorMessage>There are no images 😭</ErrorMessage>}
      {isLoading ? (
        <Loader className={style.mainLoader} />
      ) : (
        visibleBtn && <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      { imageinfo &&
        <ImageModal
          alt={imageinfo.alt}
          urls={imageinfo.urls}
          modalIsOpen={showModal}
          closeModal={onCloseModal}
          color={imageinfo.color}
          likes={imageinfo.numberOfLikes}
          descriptions={imageinfo.title}
          location={imageinfo.location}
          photographerName={imageinfo.photographer}
          instId={imageinfo.instagramId}
        />}
      <Toaster
        containerStyle={{
          left: 0,
          right: 0,
        }}
        toastOptions={{
          className: css.toaster,
        }}
      />
    </div>
    
  );
  
}

export default App;