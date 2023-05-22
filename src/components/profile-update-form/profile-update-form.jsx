import { useState } from 'react';
import ProfleUpdateFormStyle from './profile-update-form.module.css';
import { Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

const ProfleUpdateForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className={ProfleUpdateFormStyle.form}>
            <fieldset className={ProfleUpdateFormStyle.wrap}>
                <Input
                    placeholder={'Имя'}
                    onChange={e => setName(e.target.value)}
                    value={name}
                    name={'name'}
                    extraClass="mb-6"
                    icon="EditIcon"
                />
                <EmailInput
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    name={'email'}
                    placeholder="Логин"
                    isIcon={true}
                    icon="EditIcon"
                    extraClass="mb-6"
                />
                <PasswordInput
                    autoComplete="off"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    name={'password'}
                    icon="EditIcon"
                    extraClass="mb-6"
                />
            </fieldset>
        </form>
)
}

export default ProfleUpdateForm;