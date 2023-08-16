import React, { useMemo, useEffect, useState, useRef, useCallback } from 'react';
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

const ModalPortal = ({ type, title, children, handleClose, maskClosable = true, closeVisible = true, modalRef, modalOpen, setModalState }) => {
  const modalShowType = ['up', 'fade'].includes(type) ? type : 'default';
  const closeRef = useRef();

  // 모달 포커스 이동 핸들러
  const handleFocusModal = useCallback(e => {
    // [shift]키를 누르지 않고 [tab}키만 눌럿을 때
    if (!e.shiftKey && e.keyCode === 9) {
      e.preventDefault();
      window.setTimeout(() => modalRef.current.focus());
    }
  }, []);

  // 닫기 버튼 포커스 이동 핸들러
  const handleFocusClose = useCallback(e => {
    /* [shift]키와 [tab}키를 동시에 눌럿을 때 */
    if (e.shiftKey && e.keyCode === 9) {
      e.preventDefault();
      closeRef.current.focus();
    }
  }, []);

  // ESC 닫기
  useEffect(() => {
    const handleEscCloseModal = e => {
      if (modalOpen && e.keyCode === 27) handleClose();
    };
    window.addEventListener('keydown', handleEscCloseModal);
    return () => window.removeEventListener('keydown', handleEscCloseModal);
  }, [setModalState]);

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
        role="dialog" // 모달의 역할을 명시
        aria-modal="true" // dim 처리가 표시되어 활성화 된 Modal만 조작 가능한 경우 추가
        aria-labelledby="modal-label" // 레이블 역할의 요소와 연결하는 것
        tabIndex="0" // 기본적으로 초점을 받을 수 없는 요소에 focus을 받을 수 있게 처리
        onKeyDown={handleFocusClose}
      >
        <div className="modal__dim" onClick={maskClosable ? handleClose : null} />
        <div className="modal__layer" tabIndex="-1">
          <header className="modal__header">
            <strong className="modal-heading" id="modal-label">
              {title}
            </strong>
          </header>
          <div className="modal__content">{children}</div>
          {closeVisible && <button type="button" className="modal-btn-close" aria-label="모달 닫기" ref={closeRef} onClick={handleClose} onKeyDown={handleFocusModal} />}
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
