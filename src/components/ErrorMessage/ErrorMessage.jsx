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