import React from 'react';

import s from './styles.module.css';

type Props = {
  setIsOpen: (isOpen: boolean) => void;
};

export const Button: React.FC<Props> = ({ setIsOpen }) => {
  return (
    <button className={s.btn} onClick={() => setIsOpen(true)}>
      Создать проект
    </button>
  );
};
