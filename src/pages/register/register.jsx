import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import registerStyle from './register.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { request } from '../../utils/api';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const postRegister = (evt) => {
        evt.preventDefault();

        request('/auth/register', 'POST', JSON.stringify({ email: email, password: password, name: name }))
        .then((data) => {
            if (data.success) {
                setEmail(email);
                setPassword(password);
                setName(name);
                navigate('/', { replace: true });
            }
        })
        .catch((err) => { console.log(err) });
    }

    return (
        <div className={registerStyle.wrapper}>
            <form className={registerStyle.form} onSubmit={postRegister}>
                <fieldset className={registerStyle.wrap}>
                    <legend className={`${registerStyle.title} text text_type_main-medium mb-6`}>Регистрация</legend>
                    <Input
                        placeholder={'Имя'}
                        onChange={e => setName(e.target.value)}
                        value={name}
                        name={'name'}
                        extraClass="mb-6"
                    />
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
                    <Button htmlType="submit" type="primary" size="medium" disabled={name && email && password ? false : true}>Зарегистрироваться</Button>
                    <p className="text text_type_main-default text_color_inactive mt-20 mb-4">Уже зарегистрированы?
                        <Link className={`${registerStyle.link} text text_type_main-small ml-2`} to={'/login'}>Войти</Link>
                    </p>
                </fieldset>
            </form>
        </div>
    )
}

export default Register;