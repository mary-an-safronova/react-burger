import { useEffect } from 'react';
import modalStyles from './modal.module.css';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ModalOverlay } from '..';
import { FC } from 'react';
import { ReactNode } from 'react';

type TModalProps = {
    readonly onClose: () => void;
    readonly children?: ReactNode;
}

const modalRoot: HTMLElement | null = document.getElementById("modals");

export const Modal: FC<TModalProps> = ({ onClose, children }) => {

    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', onKeyDown)

        return () => {
            document.removeEventListener('keydown', onKeyDown)
        }
    }, [])

    return createPortal(
        (
        <>
            <ModalOverlay onClose={onClose} />
            <div className={modalStyles.modal}>
                <button className={modalStyles.closeButton} onClick={onClose}>
                    <CloseIcon type="primary" />
                </button>
                {children}
            </div>
        </>
        ),
        modalRoot as HTMLElement
    )
}