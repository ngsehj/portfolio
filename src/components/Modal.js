import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

function Portal({ children, elementId }) {
  const rootElement = useMemo(() => document.getElementById(elementId), [elementId]);

  return createPortal(children, rootElement);
}

const Modal = ({ type, onClose, maskClosable, closeVisible, heading, children }) => {
  const modalShowType = ['up', 'fade'].includes(type) ? type : 'default';

  const onMaskClick = e => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = e => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  useEffect(() => {
    // document.body.style.cssText = `overflow: hidden;position: fixed;top: -${window.scrollY}px`;
    document.body.style.cssText = `overflow: hidden;`;

    return () => {
      // const scrollY = document.body.style.top;
      // document.body.style.cssText = `overflow: '';position: ''; top: '';`;
      // window.scrollTo(0, parseInt(scrollY || 0) * -1);
      document.body.style.cssText = `overflow: '';`;
    };
  }, []);

  return (
    <Portal elementId="modal">
      <div className={['modal', `modal-${modalShowType}`].join(' ')}>
        <div className="modal__dim" onClick={maskClosable ? onMaskClick : null} />
        <div className="modal__layer" tabIndex="-1">
          <header className="modal__header">
            <strong className="modal-heading">{heading}</strong>
            {closeVisible && (
              <button className="modal-btn-close" onClick={close}>
                X
              </button>
            )}
          </header>
          <section className="modal__content">{children}</section>
          {/* <footer className="modal__footer"></footer> */}
        </div>
      </div>
    </Portal>
  );
};

Modal.defaultProps = {
  closeVisible: true,
  maskClosable: true,
};

export default Modal;
