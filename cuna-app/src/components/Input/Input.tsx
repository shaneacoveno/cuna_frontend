import React, { FC } from 'react';

import { StyledInput } from './Input.styles';

type Props = {
  placeholder?: string;
  name: string;
  type: string;
  hasError?: boolean;
  min?: string;
  max?: string;
}

const Input: FC<Props> = ({ hasError, placeholder, name, type, min, max }) => (
  <StyledInput type={type} placeholder={placeholder} name={name} hasError={hasError} min={min} max={max} required />
);

export default Input;