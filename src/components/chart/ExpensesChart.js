import React, { useContext } from "react";
import ChartBar from './ChartBar'
import styled from "styled-components";
import { ExpensesContext } from "../../contexts/ExpensesContext";
const ExpenseChart = () => {
    const context = useContext(ExpensesContext)
    const { filteredYear } = context
    const month = [
        { label: 'Jan', currentPrice: 0 },
        { label: 'Feb', currentPrice: 0 },
        { label: 'Mar', currentPrice: 0 },
        { label: 'Apr', currentPrice: 0 },
        { label: 'May', currentPrice: 0 },
        { label: 'Jun', currentPrice: 0 },
        { label: 'Jul', currentPrice: 0 },
        { label: 'Aug', currentPrice: 0 },
        { label: 'Sep', currentPrice: 0 },
        { label: 'Oct', currentPrice: 0 },
        { label: 'Nov', currentPrice: 0 },
        { label: 'Dec', currentPrice: 0 },
    ]
    filteredYear.forEach(element => {
        if (element.date instanceof Date) {
            const expenseMonth = element.date.getMonth()
            month[expenseMonth].currentPrice += element.price
        } else {
            const convertedDate = new Date(element.date)
            const expenseMonth = convertedDate.getMonth()
            month[expenseMonth].currentPrice += element.price
        }
    });
    return (
        <Chart>
            {month.map((dataPoint) => {
                return <ChartBar el={dataPoint} />
            })}
        </Chart>
    )
}
export default ExpenseChart
const Chart = styled.div`
  width: 748px;
  height: 151px;
  background: #f8dfff;
  border-radius: 12px;
  display: flex;
  justify-content: space-evenly;
  color:black;
  margin-top: 18px;
`