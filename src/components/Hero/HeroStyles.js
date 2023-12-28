import styled from 'styled-components';

import variables from '../../styles/variables';

const { colors } = variables;
export const HeroSection = styled.section`
  min-width: 320px;
  max-width: 375px;
  padding: 0 20px;
  margin: 89px auto 0;
  display: flex;
`;

export const TitleBox = styled.div`
  display: flex;
  width: 335px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 28px;
`;
export const Title = styled.h1`
  color: ${colors.textBlack};
  font-size: 26px;
  font-weight: 600;
  line-height: 120%; /* 31.2px */
  text-transform: uppercase;
`;
export const Span = styled.span`
  color: ${colors.textGreen};
  font-size: 26px;
  font-style: italic;
  font-weight: 400;
  line-height: 120%;
  text-transform: uppercase;
`;
export const P = styled.p`
  color: #050505;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
`;
export const ButtonOrder = styled.p`
  color: #050505;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
`;
