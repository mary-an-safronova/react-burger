import { Link } from 'react-router-dom';
import notFoundStyle from './not-found.module.css';
import { PATH } from '../../utils/api';

const NotFound404 = () => {

  return (
    <div className={notFoundStyle.wrapper}>
      <div className={notFoundStyle.container}>
        <div className={notFoundStyle.content}>
          <h1 className="text text_type_main-large mb-10">Упс! Ошибка 404</h1>
          <p className="text text_type_main-medium text_color_inactive mb-2">Страница не найдена</p>
          <p className="text text_type_main-default text_color_inactive">Перейти на <Link to={PATH.HOME} className={`${notFoundStyle.link} text text_type_main-default`}>главную</Link></p>
        </div>
      </div>
    </div>
  );
}

export default NotFound404;