import React, { useEffect, useMemo } from "react"
import { createPortal } from "react-dom";

function Portal({ children, elementId }) {
  const rootElement = useMemo(() => document.getElementById(elementId), [
    elementId,
  ])

  return createPortal(children, rootElement)
}

const Modal = ({
  onClose,
  maskClosable,
  visible,
  closable,
  heading,
  children
}) => {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  }

  const close = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  }

  useEffect(() => {
    document.body.style.cssText = `position: fixed;top: -${window.scrollY}px`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ''; top: '';`;
      window.scrollTo(0, parseInt(scrollY || 0) * -1);
    }
  }, [])

  return (
    // <Portal elementId="portalModal"></Portal>
    <>
      <div className="dim" visible={visible}></div>
      <div
        className="modal__layer"
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <div className="modal__header">
          <strong className="heading">{heading}</strong>
          {closable && <div className="modal-btn-close" onClick={close}>X</div>}
        </div>
        <div className="modal__container">
          {children}
        </div>
      </div>
    
    </>

  )
}

Modal.defaultProps = {
  closable: true,
  maskClosable: true,
  visible: false
}

export default Modal;
