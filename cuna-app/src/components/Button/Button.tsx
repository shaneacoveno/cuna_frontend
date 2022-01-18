import React, { FC } from 'react';

import { ButtonStyled } from './Button.styles';
enum ButtonTypes{
    "button",
    "submit",
    "reset",
    undefined
}

type Props = {
  type: string;
  text: string;
  
}

const Button: FC<Props> = ({ type, text }) => (
  <ButtonStyled {...type}>{text}</ButtonStyled>
);

export default Button;