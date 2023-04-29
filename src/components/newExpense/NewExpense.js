import { Button } from '../UI/Button';
import { ExpensesForm } from './ExpensesForm'
import { useState } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { NewExpenseContext } from '../../contexts/NewExpenseContext';
import ExpensesFormProvider from '../../contexts/ExpensesFormContext';

export const NewExpense = ({ onSubmit }) => {
    const context = useContext(NewExpenseContext)
    const ButtonContainer = context.containerStyle ? ButtonContainerTwo : ButtonContainerOne;

    return (
        <ButtonContainer>
            {context.showForm ? (
                <ExpensesFormProvider   >
                    <ExpensesForm onSubmit={onSubmit}  onClick={() => { context.openAndCloseExpensesFormHandler(); context.changeButtonContainer() }} />
                </ExpensesFormProvider>
            ) : (
                <Button onClick={() => { context.openAndCloseExpensesFormHandler(); context.changeButtonContainer() }}>
                    Добавить новый расход
                </Button>
            )}
        </ButtonContainer>
    );
};

const ButtonContainerOne = styled.div`
    background: #ad9be9;
    border-radius: 12px;
    width: 780px;
    height: 71px;
    padding-top: 20px;
    margin-top: 20px;
`;

const ButtonContainerTwo = styled.div`
    width: 780px;
    height: 287px;
    margin-top: 20px;
    background: #ad9be9;
    border-radius: 12px;
`;