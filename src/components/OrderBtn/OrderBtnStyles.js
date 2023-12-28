import styled from 'styled-components';
import variables from '../../styles/variables';

const { colors } = variables;

export const BtnOrder = styled.button`
  display: inline-flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: ${colors.backgroundLight};
  color: ${colors.textBlack};
  border-radius: 12px;
  border: 1px solid #9bb537;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: all 0.3s;
  &:hover {
    color: ${colors.textWhite};
    background: ${colors.backgroundGreen};
  }
`;
