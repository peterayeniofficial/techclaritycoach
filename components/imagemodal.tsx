import { useState } from 'react';
import "./button.module.css"

interface ImageModalProps {
  imageUrl: string;
  altText: string;
  text: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, altText, text }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="open-modal-button">
        Open Modal
      </button>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={imageUrl} alt={altText} />
            <p>{text}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .open-modal-button {
          cursor: pointer;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 10px 20px;
        }

        .modal {
          display: block;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
        }

        .modal-content {
          background-color: #fefefe;
          margin: 15% auto;
          padding: 20px;
          border: 1px solid #888;
          width: 80%;
          text-align: center;
        }

        .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
        }

        img {
          max-width: 100%;
          max-height: 300px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default ImageModal;
