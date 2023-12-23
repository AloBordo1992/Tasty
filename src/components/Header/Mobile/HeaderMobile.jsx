import Logo from '../../Logo/Logo';
import { Header, ListBtn, Shopping } from './HeaderMbileStyles';
import ShoppingBtn from './../../ShoppingBtn/ShoppingBtn';
import MenuBtn from './../../MenuBtn/MenuBtn';

const HeaderMobile = () => {
  return (
    <Header>
      <Logo />
      <ListBtn>
        <Shopping>
          <ShoppingBtn />
        </Shopping>
        <li>
          <MenuBtn />
        </li>
      </ListBtn>
    </Header>
  );
};

export default HeaderMobile;
