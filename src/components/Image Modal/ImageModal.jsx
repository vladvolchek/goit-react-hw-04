import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { AiOutlineClose } from 'react-icons/ai';

export const ImageModal = ({ item, closeModal, modalIsOpen }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      ariaHideApp={false}
      className={css.modalContent}
      overlayClassName={css.overlay}
    >
      <button onClick={closeModal} className={css.modalBtn}>
        <AiOutlineClose size="15px" />
      </button>
      <img src={item.urls.regular} alt={item.alt_description} className={css.cardModal} />
    </Modal>
  );
};