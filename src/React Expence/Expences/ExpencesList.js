import React from "react";
import ExpenceItem from "./ExpenceItem";
import "./ExpenceList.css";
const ExpencesList = (props) => {
  const filterExpences = props.items;
  let expencesData = <p>No Expences Found.</p>;

  if (filterExpences.length === 0) {
    return expencesData;
  }
  return (
    <ul className="expenses-list">
      {filterExpences.map((arr) => (
        <ExpenceItem
          key={arr.id}
          title={arr.title}
          amount={arr.amount}
          date={arr.date}
        />
      ))}
    </ul>
  );
};
export default ExpencesList;
