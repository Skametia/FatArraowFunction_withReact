import React from "react";

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div>
        <h2>{title}</h2>
        <div>${amount}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
