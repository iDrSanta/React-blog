import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

import './ModalWindow.scss';

export const ModalWindow = ({ toggleVisibleModal }) => {
  return (
    <div onClick={toggleVisibleModal} className="modalWrapper">
      <div onClick={(e) => e.stopPropagation()} className="modalContent">
        <CloseIcon onClick={toggleVisibleModal} sx={{ color: 'rgb(158, 158, 158)' }} />
      </div>
    </div>
  );
};
