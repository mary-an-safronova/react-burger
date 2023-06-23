import loadingStyle from './loading.module.css';

const Loading = ({ children }) => {
    return (
        <div className={loadingStyle.overlay}>
            <p className={`${loadingStyle.span} className="text text_type_main-medium`}>{children}</p>
            <div className={loadingStyle.loader}></div>
        </div>
    )
}

export default Loading;