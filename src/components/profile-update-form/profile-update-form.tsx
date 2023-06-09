import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/hooks';
import ProfleUpdateFormStyle from './profile-update-form.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { getUser } from '../../services/actions/auth';
import { updateUser } from '../../services/actions/auth';

const ProfleUpdateForm = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const [value, setValue] = useState({ name: user.name, email: user.email, password: '' })

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    useEffect(() => {
        setValue({
            name: user.name,
            email: user.email,
            password: ''
        })
    }, [user.name, user.email])

    const updateProfile = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        dispatch(updateUser(value.name, value.email, value.password));
    }

    const handleCancel = () => {
        setValue({
            name: user.name,
            email: user.email,
            password: ''
        })
    }

    return (
        <section>
            <form className={`${ProfleUpdateFormStyle.form} mt-30`} onSubmit={updateProfile}>
                <fieldset className={ProfleUpdateFormStyle.wrap}>
                    <Input
                        placeholder={'Имя'}
                        onChange={(evt) => setValue({ ...value, name: evt.target.value })}
                        value={value.name}
                        name={'name'}
                        extraClass="mb-6"
                        icon="EditIcon"
                    />
                    <EmailInput
                        placeholder="Логин"
                        onChange={(evt) => setValue({ ...value, email: evt.target.value })}
                        value={value.email}
                        name={'email'}
                        isIcon={true}
                        extraClass="mb-6"
                    />
                    <PasswordInput
                        placeholder="Пароль"
                        autoComplete="off"
                        onChange={(evt) => setValue({ ...value, password: evt.target.value })}
                        value={value.password}
                        name={'password'}
                        icon="EditIcon"
                        extraClass="mb-6"
                    />
                    {
                        value.name !== user.name || value.email !== user.email || value.password !== '' ?
                        <div className={`${ProfleUpdateFormStyle.buttons} mt-6`}>
                            <Button type="secondary" size="medium" htmlType="reset" extraClass="pr-7" onClick={handleCancel}>Отмена</Button>
                            <Button type="primary" size="medium" htmlType="submit">Сохранить</Button>
                        </div> : null
                    }
                </fieldset>
            </form>
        </section>
)
}

export default ProfleUpdateForm;