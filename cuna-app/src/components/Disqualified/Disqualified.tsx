import React, { FC } from 'react';

import { DisqualifiedStyled } from './Disqualified.styles';

const Disqualified: FC = () => (
  <DisqualifiedStyled>
    <h1>You do not qualify for an auto loan currently. We apologize for the inconvience.</h1>
  </DisqualifiedStyled>
);

export default Disqualified;