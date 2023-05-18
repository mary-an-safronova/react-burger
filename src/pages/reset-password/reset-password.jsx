import { useState } from 'react';
import { Link } from 'react-router-dom';
import resetPasswordStyle from './reset-password.module.css';
import { PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const ResetPassword = () => {

    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');

    return (
        <div className={resetPasswordStyle.wrapper}>
            <form className={resetPasswordStyle.form}>
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