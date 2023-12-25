import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import variables from './../../../styles/variables';

const { colors } = variables;

export const Header = styled.header`
  min-width: 320px;
  max-width: 375px;

  padding: 30px 20px 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    padding-top: 42px;
  }
`;
export const NavList = styled.ul`
  display: flex;
  gap: 16px;
`;
export const LinkNav = styled(NavLink)`
  text-decoration: none;
  color: ${colors.textBlack};
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.64px;
  &.active {
    color: ${colors.textGreen};
  }
`;
export const ListBtn = styled.ul`
  display: flex;
`;
