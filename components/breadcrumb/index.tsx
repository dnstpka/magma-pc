import React from 'react';

import s from './styles.module.css';

export const Breadcrumb: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <ul className={s.breadcrumb}>
        <li className={s.item}>
          <a className={s.link} href="/">
            <img
              className={s.icon}
              src="./images/house-icon.svg"
              alt="на главную"
            />
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="/">
            Проекты
          </a>
        </li>
      </ul>
    </div>
  );
};
