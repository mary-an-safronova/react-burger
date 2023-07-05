import { FC, SyntheticEvent } from 'react';
import modalOverlayStyles from './modal-overlay.module.css';

export type TModalOverlayProps = {
    onClose: () => void;
};

export const ModalOverlay: FC<TModalOverlayProps> = ({ onClose }) => {
    
    const closeModalOverlay = (evt: SyntheticEvent<HTMLDivElement>) => {
        const target = evt.target as HTMLDivElement;
        if (target.classList.contains(modalOverlayStyles.overlay)) {
            onClose()
        }
    }

    return (
        <div className={modalOverlayStyles.overlay} onClick={closeModalOverlay}></div>
    )
}