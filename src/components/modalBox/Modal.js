import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import closeImg from '../../images/close-img.png'

const modalRoot = document.querySelector('#modal-root')

export default function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDownESC)
    window.addEventListener('click', handleBackdropClick)
    return () => {
      window.removeEventListener('keydown', handleKeyDownESC)
      window.removeEventListener('click', handleBackdropClick)
    }
  })
  const handleKeyDownESC = (e) => {
    if (e.code === 'Escape') {
      onClose()
    }
  }
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose()
    }
  }
  return createPortal(
    <div className="modal__backdrop" onClick={handleBackdropClick}>
      <div className="modal__box">
        <button type="button" onClick={onClose} className="close__btn">
          <img alt="" src={closeImg} className="close__img" />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  )
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
}
