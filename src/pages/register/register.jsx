import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import registerStyle from './register.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { postRegister } from '../../services/actions/auth';

const Register = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleRegister = (evt) => {
        evt.preventDefault();
        dispatch(postRegister(value.email, value.password, value.name));
        navigate('/login', { replace: true });
    }

    return (
        <div className={registerStyle.wrapper}>
            <form className={registerStyle.form} onSubmit={handleRegister}>
                <fieldset className={registerStyle.wrap}>
                    <legend className={`${registerStyle.title} text text_type_main-medium mb-6`}>Регистрация</legend>
                    <Input
                        placeholder={'Имя'}
                        onChange={(e) => setValue({ ...value, name: e.target.value })}
                        value={value.name}
                        name={'name'}
                        extraClass="mb-6"
                    />
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
                    <Button htmlType="submit" type="primary" size="medium" disabled={value.name && value.email && value.password ? false : true}>Зарегистрироваться</Button>
                    <p className="text text_type_main-default text_color_inactive mt-20 mb-4">Уже зарегистрированы?
                        <Link className={`${registerStyle.link} text text_type_main-small ml-2`} to={'/login'}>Войти</Link>
                    </p>
                </fieldset>
            </form>
        </div>
    )
}

export default Register;