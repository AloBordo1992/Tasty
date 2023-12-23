import React from 'react';
import { BtnMenu } from './MenuBtnStyles';

const MenuBtn = () => {
  return (
    <BtnMenu>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
      >
        <path
          d="M28 13.8333H4"
          stroke="#050505"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 8.5H4"
          stroke="#050505"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 19.1667H4"
          stroke="#050505"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 24.5H4"
          stroke="#050505"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </BtnMenu>
  );
};

export default MenuBtn;
