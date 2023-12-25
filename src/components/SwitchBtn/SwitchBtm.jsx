import React from 'react';
import { BtnSwitch, Svg } from './SwitchBtnStyles';

const SwitchBtn = () => {
  return (
    <BtnSwitch>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="20"
        viewBox="0 0 46 20"
      >
        <path
          fill="#cecdcd"
          d="M13.176 6.902H29.49a6.274 6.274 0 0 1 0 12.549H13.176a6.274 6.274 0 0 1 0-12.548z"
        />
        <path
          fill="#f8f8f8"
          d="M19.074 13.177a5.898 5.898 0 1 1-11.797-.001 5.898 5.898 0 0 1 11.797.001z"
        />
      </Svg>
    </BtnSwitch>
  );
};

export default SwitchBtn;
