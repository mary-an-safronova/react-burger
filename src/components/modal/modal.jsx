import React from 'react';
import { useEffect } from 'react';
import modalStyles from './modal.module.css';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ModalOverlay } from '../modal-overlay/modal-overlay.jsx';

const modalRoot = document.getElementById("modals");

export const Modal = (props) => {

    useEffect(() => {
        function onKeyDown(e) {
            if (e.key === 'Escape') {
                props.onClose()
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
            <ModalOverlay onClose={props.onClose} />
            <div className={modalStyles.modal}>
                <button className={modalStyles.closeButton} onClick={props.onClose}>
                    <CloseIcon type="primary" />
                </button>
                {props.children}
            </div>
        </>
        ),
        modalRoot
    )
}