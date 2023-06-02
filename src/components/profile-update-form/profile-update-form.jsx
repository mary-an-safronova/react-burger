import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

    const updateProfile = (evt) => {
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
            <form className={ProfleUpdateFormStyle.form} onSubmit={updateProfile}>
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
                        icon="EditIcon"
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
            <p className={`${ProfleUpdateFormStyle.span} text text_type_main-default text_color_inactive pt-2`}>В этом разделе вы можете</p>
            <p className={`${ProfleUpdateFormStyle.span} text text_type_main-default text_color_inactive`}>изменить свои персональные данные</p>
        </section>
)
}

export default ProfleUpdateForm;