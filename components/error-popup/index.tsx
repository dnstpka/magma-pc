import React from 'react';

import s from './styles.module.css';

type Props = {
  message: string | null;
  onClose: () => void;
};

export const ErrorPopup: React.FC<Props> = ({ message, onClose }) => {
  return (
    <div className={s.popup}>
      <button className={s.btn} onClick={onClose}>
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
      {message}
    </div>
  );
};
