import React, {FC, useReducer, SyntheticEvent} from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';

import { StyledLanding, StyledLandingHeading, StyledLandingError, StyledLandingMarketingText } from './landingPage.styles';




const LandingPage: FC = () => {
    const history = useHistory();

    const reducer = (state, action) => {
        switch(action.type) {
            case 'CHANGE_INPUT': {
                const name = action.target.name;
                const value = action.target.value;

                return {
                    ...state,
                    [name]: value,
                    error: state.error && parseInt(state.price, 10) < 1000001 && false,
                }
            }
            case 'SUBMIT_PRICE_CHECK': {
                if (action.error) {
                    return {
                        ...state,
                        error: 'Purchase price is too high. Please enter a new price.'
                    }
                }
                break;
            }
            case 'CLEAR_ERROR': {
                return{
                    ...state,
                    error: false,
                }
            }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, {});

    const onChange = (event: SyntheticEvent) => {
        dispatch({
            type: 'CHANGE_INPUT',
            target: event.target,
        })
    }

    const validateData = (creditScore: number, price: number, income: number) => {
        if (price > income * 0.2 || creditScore < 600) {
            return false
        }
        return true
    }

    const onSubmit = async(event: SyntheticEvent) => {
        event.preventDefault();

        let data;

        if (parseInt(state.price, 10) > 1000000) {
            dispatch({
                type: 'SUBMIT_PRICE_CHECK',
                error: true,
            })
            data = await Promise.reject(console.error('Bad Request'))
        } else {

            data = await Promise.resolve(state);
        }

        if (data && validateData(parseInt(data.creditScore, 10), parseInt(data.price, 10),  parseInt(data.income, 10))) {
            history.push('/new-account')
        } else {
            history.push('/disqualified')
        }

    }

    return (
        <StyledLanding>
      <StyledLandingHeading>Auto Loan Calculator</StyledLandingHeading>
      <StyledLandingMarketingText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</StyledLandingMarketingText>
      <form onChange={onChange} onSubmit={onSubmit}>
        {state.error && (
          <StyledLandingError>{state.error}</StyledLandingError>
        )}
        <Input type='number' placeholder='Purchase Price' name='price' hasError={state.error} />
        <Input type='text' placeholder='Auto Make' name='make' />
        <Input type='text' placeholder='Auto Model' name='model' />
        <Input type='number' placeholder='Estimated Yearly Income' name='income' />
        <Input type='number' placeholder='Estimated Credit Score' name='creditScore' min='300' max='850' />
        <Button type='submit' text='Calculate' />
      </form>
    </StyledLanding>
  );
    

}
export default LandingPage