import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import forgotPasswordStyle from './forgot-password.module.css';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { request } from '../../utils/api';

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const postMail = (evt) => {
        evt.preventDefault();

        request('/password-reset', 'POST', JSON.stringify({ email: email }))
        .then((success, data) => {
            if (success) {
                setEmail(data);
                navigate('/reset-password', { replace: true });
            }
        })
        .catch((err) => { console.log(err) });
    }

    return (
        <div className={forgotPasswordStyle.wrapper}>
            <form className={forgotPasswordStyle.form} onSubmit={postMail}>
                <fieldset className={forgotPasswordStyle.wrap}>
                    <legend className={`${forgotPasswordStyle.title} text text_type_main-medium mb-6`}>Восстановление пароля</legend>
                    <EmailInput
                        placeholder={'Укажите e-mail'}
                        autoComplete="off"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        name={'email'}
                        isIcon={false}
                        extraClass="mb-6"
                    />
                    <Button htmlType="submit" type="primary" size="medium" disabled={email ? false : true}>Восстановить</Button>
                    <p className="text text_type_main-default text_color_inactive mt-20 mb-4">Вспомнили пароль?
                        <Link className={`${forgotPasswordStyle.link} text text_type_main-small ml-2`} to={'/login'}>Войти</Link>
                    </p>
                </fieldset>
            </form>
        </div>
    )
}

export default ForgotPassword;