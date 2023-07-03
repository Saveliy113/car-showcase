'use client';

import { FC } from 'react';
import Image from 'next/image';
import { CustomButtonProps } from '@/types';

type Props = {};

const CustomButton: FC<CustomButtonProps> = ({
  title,
  btnType,
  containerStyles,
  handleClick,
}) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
