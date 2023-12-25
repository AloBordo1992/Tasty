import styled from 'styled-components';
import variables from '../../styles/variables';

const { colors } = variables;

export const BtnSwitch = styled.button`
  display: flex;
  padding: 0px;
  border: none;
  background: ${colors.backgroundLight};
`;

export const Svg = styled.svg`
  padding: 0px;
  background: ${colors.backgroundLight};
  fill: #cecdcd;
`;
