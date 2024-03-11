import { fetchPhotos } from '../../api/apiPhoto';
import { useEffect, useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import { ErrorMessage } from '../Error/ErrorMessage';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchImage = async newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchdata() {
      try {
        setLoading(true);
        setError(false);

        const fetchedData = await fetchPhotos({ query, page });

        setPhotos(prevPhotos => [...prevPhotos, ...fetchedData]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchdata();
  }, [query, page]);

  return (
    <div>
      <SearchBar onSearch={searchImage} />
      {error && <ErrorMessage />}
      {photos.length > 0 && <ImageGallery items={photos} />}
      {loading && <Loader />}
      {photos.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore}>Load More</LoadMoreBtn>
      )}
      <Toaster position="bottom-center" />
    </div>
  );
};