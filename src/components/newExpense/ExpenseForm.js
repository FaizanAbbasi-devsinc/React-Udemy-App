import "./ExpenseForm.css";
import NewExpense from "./NewExpense";

const ExpenseForm = (props) => {
const saveExpenseDataHandler = (enteredExpenseData) => {
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()
  };
  props.onAddExpense(expenseData);
}


  return (
    <div className="new-expense">
      <NewExpense onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default ExpenseForm;
