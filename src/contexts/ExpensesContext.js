import { createContext, useContext, useState } from "react";
import { ProductContext } from "./ProductContext";

export const ExpensesContext = createContext({

})
const ExpensesProvider = ({ children }) => {
    const productContext = useContext(ProductContext)
    const { product } = productContext
    
    const [selectedYear, setSelectedYear] = useState('2023')
    const [sortState, setSortState] = useState(true)

    const filteredYear = product.filter((el) => {
        if (el.date instanceof Date) {
            return el.date.getFullYear().toString() === selectedYear;
        } else {
            const convertedDate = new Date(el.date)
            return convertedDate.getFullYear().toString() === selectedYear
        }
    })

    const sortedData = filteredYear.slice().sort((a, b) => {
        if (sortState === true) {
            if (a.date instanceof Date && b.date instanceof Date) {
                return a.date.getMonth() - b.date.getMonth()
            } else {
                const convertedMonthA = new Date(a.date)
                const convertedMonthB = new Date(b.date)
                return convertedMonthA.getMonth() - convertedMonthB.getMonth()
            }
        } else if (sortState === false) {
            if (a.date instanceof Date && b.date instanceof Date) {
                return b.date.getMonth() - a.date.getMonth()
            } else {
                const convertedMonthA = new Date(a.date)
                const convertedMonthB = new Date(b.date)
                return convertedMonthB.getMonth() - convertedMonthA.getMonth()
            }
        }
    })
    function getSelectValue(event) {
        setSelectedYear(event.target.value)
    }

    function ascendingProduct() {
        setSortState(true)
    }

    function descendingProduct() {
        setSortState(false)
    }
    const initFuncAndState = {
        descendingProduct,
        ascendingProduct,
        getSelectValue,
        selectedYear,
        filteredYear,
        sortedData,
    }
    return (
        <ExpensesContext.Provider value={initFuncAndState}>
            {children}
        </ExpensesContext.Provider>
    )
}
export default ExpensesProvider