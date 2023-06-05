import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import loginStyle from './login.module.css';
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { postAuthorization } from '../../services/actions/auth';
import { PATH } from '../../utils/api';
import { useLocation } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const from = location?.state?.from || PATH.HOME;

    const [value, setValue] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleAuthorization = (evt) => {
        evt.preventDefault();
        dispatch(postAuthorization(value.email, value.password));
        navigate(from, { replace: true });
    }

    return (
        <div className={loginStyle.wrapper}>
            <form className={loginStyle.form} onSubmit={handleAuthorization}>
                <fieldset className={loginStyle.wrap}>
                    <legend className={`${loginStyle.title} text text_type_main-medium mb-6`}>Вход</legend>
                    <EmailInput
                        autoComplete="off"
                        onChange={(e) => setValue({ ...value, email: e.target.value })}
                        value={value.email}
                        name={'email'}
                        isIcon={false}
                        extraClass="mb-6"
                    />
                    <PasswordInput
                        autoComplete="off"
                        onChange={(e) => setValue({ ...value, password: e.target.value })}
                        value={value.password}
                        name={'password'}
                        extraClass="mb-6"
                    />
                    <Button htmlType="submit" type="primary" size="medium" disabled={value.email && value.password ? false : true}>Войти</Button>
                    <p className="text text_type_main-default text_color_inactive mt-20 mb-4">Вы — новый пользователь?
                        <Link className={`${loginStyle.link} text text_type_main-small ml-2`} to={PATH.REGISTER}>Зарегистрироваться</Link>
                    </p>
                    <p className="text text_type_main-default text_color_inactive">Забыли пароль?
                        <Link className={`${loginStyle.link} text text_type_main-small ml-2`} to={PATH.FORGOT_PASSWORD}>Восстановить пароль</Link>
                    </p>
                </fieldset>
            </form>
        </div>
    )
}

export default Login;