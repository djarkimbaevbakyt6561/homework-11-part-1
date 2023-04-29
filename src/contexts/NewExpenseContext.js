import { createContext, useState } from "react";


export const NewExpenseContext = createContext({
    showForm: false,
    containerStyle: false,
})
const NewExpenseProvider = (props) => {
    const [showForm, setShowForm] = useState(false);
    const [containerStyle, setContainerStyle] = useState(false);

    function openAndCloseExpensesFormHandler() {
        setShowForm((prev) => !prev);
    }

    function changeButtonContainer() {
        setContainerStyle((prev) => !prev);
    }
    const initState = {
        showForm,
        containerStyle,
        openAndCloseExpensesFormHandler,
        changeButtonContainer,
    }
    return (
        <NewExpenseContext.Provider value={initState}>
            {props.children}
        </NewExpenseContext.Provider>
    )
}
export default NewExpenseProvider