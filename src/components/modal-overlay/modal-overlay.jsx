import modalOverlayStyles from './modal-overlay.module.css';

export const ModalOverlay = (props) => {
    
    const closeModalOverlay = (evt) => {
        if (evt.target.classList.contains(modalOverlayStyles.overlay)) {
            props.onClose()
        }
    }

    return (
        <div className={modalOverlayStyles.overlay} onClick={closeModalOverlay}></div>
    )
}