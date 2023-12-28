import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderMobile from '../Header/Mobile/HeaderMobile';
import GlobalStyles from '../../styles/GlobalStyles';
// import PcHeader from './../Header/PcTablet/PcHeader';

const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <HeaderMobile />
      {/* <PcHeader /> */}
      <Outlet />
    </>
  );
};

export default Layout;
