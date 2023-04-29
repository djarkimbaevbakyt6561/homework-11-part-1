import { createContext, useState } from 'react';

export const ExpensesFormContext = createContext({
    inputText: '',
    setInputText: () => { },
    inputNumber: '',
    setInputNumber: () => { },
    inputDate: '',
    getInputDate: () => { },
});

const ExpensesFormProvider = ({ children }) => {
    const [inputText, setInputText] = useState('');
    const [inputNumber, setInputNumber] = useState('');
    const [inputDate, setInputDate] = useState('');

    const value = {
        inputText,
        setInputText,
        inputNumber,
        setInputNumber,
        inputDate,
        setInputDate,
    };

    return (
        <ExpensesFormContext.Provider value={value}>
            {children}
        </ExpensesFormContext.Provider>
    );
};

export default ExpensesFormProvider;