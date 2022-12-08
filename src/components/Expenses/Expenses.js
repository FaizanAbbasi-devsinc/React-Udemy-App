import { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense  = props.items.filter(
    expense => {
      return expense.date.getFullYear().toString() === filteredYear
    }
  );


  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseChart expenses={filteredExpense}/>
      <ExpensesList items={filteredExpense}/>
    </Card>
  );
}

export default Expenses;
