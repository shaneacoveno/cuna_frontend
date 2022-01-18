import styled from 'styled-components';

interface LandingProps {
  readonly active?: boolean;
}

const StyledLanding = styled.div`
  max-width: 474px;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 480px) {
    padding: 0 20px;
  }
`;

const StyledLandingHeading = styled.h1`
  font-size: 48px;
`;

const StyledLandingMarketingText = styled.p`
  font-size: 18px;
  margin: 20px 0;
`;

const StyledLandingError = styled.div<LandingProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  background-color: #FF5252;
  width: 100%;
  height: 80px;
`;

export { StyledLanding, StyledLandingHeading, StyledLandingError, StyledLandingMarketingText }