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
  closeVisible,
  heading,
  children
}) => {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      console.log(e.target, e.currentTarget)
      onClose(e);
    }
  }

  const close = (e) => {
    if (e.target === e.currentTarget) {
      console.log(e.target, e.currentTarget)
      onClose(e);
    }
  }

  useEffect(() => {
    document.body.style.cssText = `position: fixed;top: -${window.scrollY}px`;
    // document.body.style.cssText = `overflow: hidden;`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `;position: ''; top: '';`;
      window.scrollTo(0, parseInt(scrollY || 0) * -1);
      // document.body.style.cssText = `overflow: '';`;
    }
  }, [])

  return (
    // <Portal elementId="portalModal"></Portal>
    <div className="modal">
      <div 
        className="modal__dim"
        onClick={maskClosable ? onMaskClick : null}  
      ></div>
      <div
        className="modal__layer"
        tabIndex="-1"
      >
        <div className="modal__header">
          <strong className="modal-heading">{heading}</strong>
          {closeVisible && <button className="modal-btn-close" onClick={close}>X</button>}
        </div>
        <div className="modal__content">
          {children}
        </div>
        <div className="modal__footer"></div>
      </div>
    </div>
  )
}

Modal.defaultProps = {
  closeVisible: true,
  maskClosable: true
}

export default Modal;
