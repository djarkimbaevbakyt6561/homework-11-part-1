import styled from 'styled-components'
function ExpenseDate(props) {
  let month = props.date
  let day = props.date
  let year = props.date

  if (props.date instanceof Date) {
    month = props.date?.toLocaleString('en-US', { month: 'long' })
    day = props.date?.toLocaleString('en-US', { day: '2-digit' })
    year = props.date?.getFullYear()
  } else {
    month = new Date(props.date)?.toLocaleString('en-US', { month: 'long' })
    day = new Date(props.date)?.toLocaleString('en-US', { month: '2-digit' })
    year = new Date (props.date)?.getFullYear()
  }
    return (
        <ExpenseDateDiv>
            <ExpenseDateMonth>{month}</ExpenseDateMonth>
            <ExpenseDateYear>{year}</ExpenseDateYear>
            <ExpenseDateDay>{day}</ExpenseDateDay>
        </ExpenseDateDiv>
    )

}
export default ExpenseDate
const ExpenseDateDiv = styled.div`
  box-sizing: border-box;
  background: #2a2a2a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  width: 82.11px;
  height: 80px;
  margin-left: 16px;
`
const ExpenseDateMonth = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  margin-top: 8px;
  color: #ffffff;
`
const ExpenseDateYear = styled.div`
  margin-top: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
`
const ExpenseDateDay = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin-top: 4px;
`