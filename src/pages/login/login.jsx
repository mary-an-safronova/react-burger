import { useState } from 'react';
import loginStyle from './login.module.css';
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={loginStyle.wrapper}>
            <form className={loginStyle.form}>
                <fieldset className={loginStyle.wrap}>
                    <legend className={`${loginStyle.title} text text_type_main-medium mb-6`}>Вход</legend>
                    <EmailInput
                        autoComplete="off"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        name={'email'}
                        isIcon={false}
                        extraClass="mb-6"
                    />
                    <PasswordInput
                        autoComplete="off"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        name={'password'}
                        extraClass="mb-6"
                    />
                    <Button htmlType="submit" type="primary" size="medium" disabled={email && password ? false : true}>Войти</Button>
                    <p className="text text_type_main-default text_color_inactive mt-20 mb-4">Вы — новый пользователь?
                        <a className={loginStyle.link} href="#"><span className="text text_type_main-small ml-2">Зарегистрироваться</span></a>
                    </p>
                    <p className="text text_type_main-default text_color_inactive">Забыли пароль?
                        <a className={loginStyle.link} href="#"><span className="text text_type_main-small ml-2">Восстановить пароль</span></a>
                    </p>
                </fieldset>
            </form>
        </div>
    )
}

export default Login;