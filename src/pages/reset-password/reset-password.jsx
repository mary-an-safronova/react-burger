import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import resetPasswordStyle from './reset-password.module.css';
import { PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { request } from '../../utils/api';

const ResetPassword = () => {

    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');

    const navigate = useNavigate();

    const postResetPassword = (evt) => {
        evt.preventDefault();

        request('/password-reset/reset', 'POST', '', JSON.stringify({ password: password, token: code }))
        .then((data) => {
            if (data.success) {
                setPassword(password);
                setCode(code);
                navigate('/', { replace: true });
            }
        })
        .catch((err) => { console.log(err) });
    }

    return (
        <div className={resetPasswordStyle.wrapper}>
            <form className={resetPasswordStyle.form} onSubmit={postResetPassword}>
                <fieldset className={resetPasswordStyle.wrap}>
                    <legend className={`${resetPasswordStyle.title} text text_type_main-medium mb-6`}>Восстановление пароля</legend>
                    <PasswordInput
                        placeholder={'Введите новый пароль'}
                        autoComplete="off"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        name={'password'}
                        extraClass="mb-6"
                    />
                    <Input
                        placeholder={'Введите код из письма'}
                        onChange={e => setCode(e.target.value)}
                        value={code}
                        name={'name'}
                        extraClass="mb-6"
                    />
                    <Button htmlType="submit" type="primary" size="medium" disabled={password && code ? false : true}>Сохранить</Button>
                    <p className="text text_type_main-default text_color_inactive mt-20 mb-4">Вспомнили пароль?
                        <Link className={`${resetPasswordStyle.link} text text_type_main-small ml-2`} to={'/login'}>Войти</Link>
                    </p>
                </fieldset>
            </form>
        </div>
    )
}

export default ResetPassword;