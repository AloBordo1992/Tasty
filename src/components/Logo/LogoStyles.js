import styled from 'styled-components';
import { Link } from 'react-router-dom';
import variables from '../../styles/variables';

const { colors } = variables;

export const LogoBox = styled.div`
  display: block;
`;

export const LogoStyle = styled(Link)`
  text-decoration: none;
  color: ${colors.textGreen};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.64px;

  span {
    color: ${colors.textBlack};
  }
`;
