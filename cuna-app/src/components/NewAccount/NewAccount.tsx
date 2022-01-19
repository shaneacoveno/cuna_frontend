import React, { FC, SyntheticEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import validator from 'validator';

import Button from '../Button/Button';
import Input from '../Input/Input';

import { NewAccountStyled } from './NewAccount.styles';

const NewAccount: FC = () => {

  const [ state, setState ] = useState<any>([]);
  const [ validEmail, setValidEmail ] = useState(false);
  const [ validPassword, setValidPassword ] = useState(false);

  const history = useHistory();
  
  const usernameValidate = (username: string) => {

    const usernameBool = validator.isEmail(username)
    
    return setValidEmail(usernameBool)
  }

  
  const passwordValidate = (password: string) => {
    
    const passwordBool = validator.isStrongPassword(password) 

    return setValidPassword(passwordBool)
  }

  const onChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;

    if (name === 'password' || name === 'confirmPassword') {
      passwordValidate(value)
    } else {
      usernameValidate(value)
    }

    setState({
      ...state,
      [name]: value
    })
  }

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    return history.push('/success');
  }

  return (
    <NewAccountStyled onChange={onChange} onSubmit={onSubmit}>
      <h1>Create a new account:</h1>
      <Input type='text' placeholder='Username' name='username' hasError={state.username && state.username.length > 0 && !validEmail} />
      <Input type='password' placeholder='Password' name='password' hasError={state.password && state.password.length > 0 && !validPassword} />
      <Input type='password' placeholder='Confirm Password' name='confirmPassword' hasError={state.confirmPassword && state.confirmPassword.length > 0 && state.password !== state.confirmPassword} />
      <Button type='submit' text='Submit' />
    </NewAccountStyled>
  )
}

export default NewAccount;