import React from "react";
import ExpenseItem from "./ExpenseItem";

const App = () => {
  const expenses = [
    { id: "e1", date: new Date(), title: "Car Insurance", amount: 294.67 },
    { id: "e2", date: new Date(), title: "Groceries", amount: 135.5 },
  ];

  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};
export default App;
