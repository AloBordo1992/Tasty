import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import GlobalStyles from '../../styles/GlobalStyles';

const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
