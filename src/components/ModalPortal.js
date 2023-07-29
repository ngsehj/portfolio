import React, { useMemo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const useModal = (initialMode = false) => {
  const [modalOpen, setModalOpen] = useState(initialMode);
  const toggle = () => setModalOpen(!modalOpen);
  return [modalOpen, setModalOpen, toggle];
};

export const useModalWithData = (initialMode = false, initialSelected = null) => {
  const [modalOpen, setModalOpen] = useState(initialMode);
  const [selected, setSelected] = useState(initialSelected);

  const setModalState = state => {
    setModalOpen(state);
    if (state === false) {
      setSelected(null);
    }
  };
  return { modalOpen, setModalOpen, selected, setSelected, setModalState };
};

function Portal({ children, elementId }) {
  const rootElement = useMemo(() => document.getElementById(elementId), [elementId]);
  return createPortal(children, rootElement);
}

const ModalPortal = ({
  type,
  title,
  children,
  handleClose,
  handleFocusModal,
  maskClosable = true,
  closeVisible = true,
  modalRef,
}) => {
  const modalShowType = ['up', 'fade'].includes(type) ? type : 'default';

  useEffect(() => {
    document.body.style.cssText = `overflow: hidden`;
    return () => {
      document.body.style.cssText = `overflow: '';`;
    };
  }, []);

  return (
    <Portal elementId="modal">
      <div
        className={['modal', `modal-${modalShowType}`].join(' ')}
        ref={modalRef}
        role="dialog"
        aria-labelledby="modal-portal"
        tabIndex="0"
      >
        <div className="modal__dim" onClick={maskClosable ? handleClose : null} />
        <div className="modal__layer" tabIndex="-1">
          <header className="modal__header">
            <strong className="modal-heading" id="modal-portal">
              {title}
            </strong>
          </header>
          <section className="modal__content">{children}</section>
          {closeVisible && (
            <button
              type="button"
              className="modal-btn-close"
              aria-label="모달 닫기"
              onClick={handleClose}
              onKeyDown={handleFocusModal}
            >
              X
            </button>
          )}
        </div>
      </div>
    </Portal>
  );
};

ModalPortal.defaultProps = {
  closeVisible: true,
  maskClosable: true,
};

export default ModalPortal;
