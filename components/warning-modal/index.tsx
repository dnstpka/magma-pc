import React from 'react';

import s from './styles.module.css';

type Props = {
  setIsOpen: (isOpen: boolean) => void;
};

export const WarningModal: React.FC<Props> = ({ setIsOpen }) => {
  return (
    <>
      <div className={s.errorBox}>
        <button className={s.btn} onClick={() => setIsOpen(false)}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M11 0.7H13V23.3H11z"
              transform="rotate(-45.001 12 12)"
            ></path>
            <path
              d="M0.7 11H23.3V13H0.7z"
              transform="rotate(-45.001 12 12)"
            ></path>
          </svg>
        </button>
        <p className={s.text}>Данный функционал ещё не реализован</p>
      </div>
    </>
  );
};
