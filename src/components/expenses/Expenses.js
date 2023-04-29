import React, { useState } from 'react'
import { ExpenseItem } from './ExpenseItem'
import ExpensesFilter from "./ExpenseFilter"
import ExpenseChart from "../chart/ExpensesChart"
import styled from 'styled-components'
import { useContext } from 'react'
import { ExpensesContext } from '../../contexts/ExpensesContext'
export const Expenses = ({ onClick }) => {
    const context = useContext(ExpensesContext)
    return (
        <UnorderedList>
            <ExpensesFilter onClick2={context.descendingProduct} onClick={context.ascendingProduct} getValue={context.getSelectValue} selected={context.selectedYear} />
            <ExpenseChart filteredExpenses={context.filteredYear} />
            {context.sortedData.map((el) => (
                <ExpenseItem id={el.id} key={el.id} el={el} onClick={onClick} />
            ))}
        </UnorderedList>

    )
}
const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-bottom: 28px;
  margin-top: 26px;
  background: #1f1f1f;
  border-radius: 12px;
  width: 780px;
  color: white;
  padding-bottom: 28px;
  `