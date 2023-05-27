import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import forgotPasswordStyle from './forgot-password.module.css';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { postForgotPassword } from '../../services/actions/auth';
import { setCookie } from '../../utils/cookie';

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const email = useSelector((state) => state.auth.email);
    const [value, setValue] = useState({ email: email })

    const handleForgotPassword = (evt) => {
        console.log('handler')
        evt.preventDefault();
        dispatch(postForgotPassword(value.email));
        setCookie('resetPassword', value.email);
        navigate('/reset-password', {replace: true});
    }

    return (
        <div className={forgotPasswordStyle.wrapper}>
            <form className={forgotPasswordStyle.form} onSubmit={handleForgotPassword}>
                <fieldset className={forgotPasswordStyle.wrap}>
                    <legend className={`${forgotPasswordStyle.title} text text_type_main-medium mb-6`}>Восстановление пароля</legend>
                    <EmailInput
                        placeholder={'Укажите e-mail'}
                        autoComplete="off"
                        onChange={(e) => setValue({ ...value, email: e.target.value })}
                        value={value.email}
                        name={'email'}
                        isIcon={false}
                        extraClass="mb-6"
                    />
                    <Button htmlType="submit" type="primary" size="medium" disabled={value.email ? false : true}>Восстановить</Button>
                    <p className="text text_type_main-default text_color_inactive mt-20 mb-4">Вспомнили пароль?
                        <Link className={`${forgotPasswordStyle.link} text text_type_main-small ml-2`} to={'/login'}>Войти</Link>
                    </p>
                </fieldset>
            </form>
        </div>
    )
}

export default ForgotPassword;