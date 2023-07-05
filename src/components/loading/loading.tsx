import loadingStyle from './loading.module.css';
import { FC } from 'react';
import { ReactNode } from 'react';

export type TLoadingProps = {
    readonly children?: ReactNode;
}

const Loading: FC = ({ children }: TLoadingProps) => {
    return (
        <div className={loadingStyle.overlay}>
            <p className={`${loadingStyle.span} className="text text_type_main-medium`}>{children}</p>
            <div className={loadingStyle.loader}></div>
        </div>
    )
}

export default Loading;