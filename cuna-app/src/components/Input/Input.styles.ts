import styled from 'styled-components';

interface InputProps {
  readonly hasError?: boolean;
}

const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: 60px;
  padding: 0;
  margin-top: 20px;
  border-radius: 4px;
  border: 2px solid ${props => props.hasError ? '#FF5252' : '#000000'};
  font-size: 18px;
  padding-left: 16px;
  outline: none;

  &:first-child {
    margin-top: 0;
  }
`;

export { StyledInput };