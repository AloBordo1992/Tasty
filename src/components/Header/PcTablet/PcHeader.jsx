import React from 'react';
import Logo from './../../Logo/Logo';
import ShoppingBtn from './../../ShoppingBtn/ShoppingBtn';
import { Header, NavList, ListBtn, LinkNav } from './PcHeaderStyles';
import SwitchBtn from './../../SwitchBtn/SwitchBtm';

const PcHeader = () => {
  return (
    <Header>
      <nav>
        <NavList>
          <li>
            <LinkNav to="/">Home</LinkNav>
          </li>
          <li>
            <LinkNav to="/favorites">Favorites</LinkNav>
          </li>
        </NavList>
      </nav>
      <Logo />
      <ListBtn>
        <li>
          <ShoppingBtn />
        </li>
        <li>
          <SwitchBtn />
        </li>
      </ListBtn>
    </Header>
  );
};

export default PcHeader;
