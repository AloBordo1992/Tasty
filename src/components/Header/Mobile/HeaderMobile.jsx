import Logo from '../../Logo/Logo';
import { Header } from './HeaderMbileStyles';
import ShoppingBtn from './../../ShoppingBtn/ShoppingBtn';
import MenuBtn from './../../MenuBtn/MenuBtn';

const HeaderMobile = () => {
  return (
    <Header>
      <Logo />
      <nav>
        <ul>
          <li>
            <ShoppingBtn />
          </li>
          <li>
            <MenuBtn />
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default HeaderMobile;
