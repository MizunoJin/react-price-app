import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const ChangeExpensesFilterHandler = (changedExpenseFilter) => {
    setFilteredYear(changedExpenseFilter);
  };

  const filteredExpenses = props.items.filter(
    (expense) => filteredYear === expense.date.getFullYear().toString()
  );

  let expensesContent = <p>There is no expense.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeExpensesFilter={ChangeExpensesFilterHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
