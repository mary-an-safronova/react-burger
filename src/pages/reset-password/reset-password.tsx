import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from '../../services/hooks';
import { Link, useNavigate } from 'react-router-dom';
import resetPasswordStyle from './reset-password.module.css';
import { PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { postResetPassword } from '../../services/actions/auth';
import { deleteCookie } from '../../utils/cookie';
import { getCookie } from '../../utils/cookie';
import { PATH } from '../../utils/api';

const ResetPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const password = useSelector((state) => state.auth.password);
    const token = useSelector((state) => state.auth.token);
    const [value, setValue] = useState({ password: password, token: token })

    const resetPassword = getCookie('resetPassword');

    useEffect(() => {
        if (!resetPassword) {
          navigate("/forgot-password");
        }
      }, [resetPassword]);

    const handleResetPassword = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        dispatch(postResetPassword(value.password, value.token));
        deleteCookie('resetPassword');
        navigate(PATH.LOGIN, { replace: true });
    }

    return (
        <div className={resetPasswordStyle.wrapper}>
            <form className={resetPasswordStyle.form} onSubmit={handleResetPassword}>
                <fieldset className={resetPasswordStyle.wrap}>
                    <legend className={`${resetPasswordStyle.title} text text_type_main-medium mb-6`}>Восстановление пароля</legend>
                    <PasswordInput
                        placeholder={'Введите новый пароль'}
                        autoComplete="off"
                        onChange={(e) => setValue({ ...value, password: e.target.value })}
                        value={value.password}
                        name={'password'}
                        extraClass="mb-6"
                    />
                    <Input
                        placeholder={'Введите код из письма'}
                        onChange={(e) => setValue({ ...value, token: e.target.value })}
                        value={value.token}
                        name={'name'}
                        extraClass="mb-6"
                    />
                    <Button htmlType="submit" type="primary" size="medium" disabled={value.password && value.token ? false : true}>Сохранить</Button>
                    <p className="text text_type_main-default text_color_inactive mt-20 mb-4">Вспомнили пароль?
                        <Link className={`${resetPasswordStyle.link} text text_type_main-small ml-2`} to={PATH.LOGIN}>Войти</Link>
                    </p>
                </fieldset>
            </form>
        </div>
    )
}

export default ResetPassword;