import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderMobile from '../Header/Mobile/HeaderMobile';
import GlobalStyles from '../../styles/GlobalStyles';

const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <HeaderMobile />
      <Outlet />
    </>
  );
};

export default Layout;
