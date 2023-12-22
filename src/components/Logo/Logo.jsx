import React from 'react';

import { LogoStyle, LogoBox } from './LogoStyles';

const Logo = () => {
  return (
    <LogoBox>
      <LogoStyle to="/">
        tasty<span>treats.</span>
      </LogoStyle>
    </LogoBox>
  );
};

export default Logo;
