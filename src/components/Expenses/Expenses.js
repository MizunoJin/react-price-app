import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const ChangeExpensesFilterHandler = (changedExpenseFilter) => {
    setFilteredYear(changedExpenseFilter);
  };

  const filteredExpenses = props.items.filter(
    (expense) => filteredYear === expense.date.getFullYear().toString()
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeExpensesFilter={ChangeExpensesFilterHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
