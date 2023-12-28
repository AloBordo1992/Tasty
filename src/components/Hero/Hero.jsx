import React from 'react';
import { TitleBox, Title, HeroSection, Span, P } from './HeroStyles';

import OrderBtn from '../OrderBtn/OrderBtn';

const Hero = () => {
  return (
    <HeroSection>
      <div>
        <TitleBox>
          <Title>
            Learn to Cook <Span>Tasty Treats'</Span> Customizable Masterclass
          </Title>
          <P>
            TastyTreats - Customize Your Meal with Ingredient Options and
            Step-by-Step Video Guides.
          </P>
        </TitleBox>
        <OrderBtn />
      </div>
    </HeroSection>
  );
};

export default Hero;
