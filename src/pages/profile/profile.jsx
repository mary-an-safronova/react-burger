import { useState } from 'react';
import ProfleStyle from './profile.module.css';
import { Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

const Profile = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={ProfleStyle.wrapper}>
            <form className={ProfleStyle.form}>
                <nav className={`${ProfleStyle.nav} mr-15`}>
                    <h1 className='className="text text_type_main-medium'>Профиль</h1>
                    <h2 className='className="text text_type_main-medium text_color_inactive'>История заказов</h2>
                    <h2 className='className="text text_type_main-medium text_color_inactive'>Выход</h2>
                    <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете изменить свои персональные данные</p>
                </nav>
                <fieldset className={ProfleStyle.wrap}>
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
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        name={'password'}
                        icon="EditIcon"
                        extraClass="mb-6"
                    />
                </fieldset>
            </form>
        </div>
    )
}

export default Profile;