import loadingStyle from './loading.module.css';
import { FC } from 'react';

const Loading: FC = () => {
    return (
        <div className={loadingStyle.overlay}>
            <p className={`${loadingStyle.span} className="text text_type_main-medium`}>Ваш заказ обрабатывается...</p>
            <div className={loadingStyle.loader}></div>
        </div>
    )
}

export default Loading;