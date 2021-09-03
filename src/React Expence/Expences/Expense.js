import React, { useState } from "react";
import "./expence.css";
import Card from "../UI/Card";
import ExpencesFilter from "./ExpencesFilter";
import ExpencesList from "./ExpencesList";
import ExpencesChart from "./ExpencesChart";

const Expence = (props) => {
  const [filteredYear, setFilter] = useState("2021");
  const filterHandler = (selectedYear) => {
    setFilter(selectedYear);
    // console.log(setFilter(selectedYear));
  };
  const items = props.items;
  const filterExpences = items.filter((expence) => {
    return expence.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expences">
      <ExpencesFilter selected={filteredYear} onChangeFilter={filterHandler} />
      <ExpencesChart expences={filterExpences} />
      <ExpencesList items={filterExpences} />

      {/* {filterExpences.length === 0 ? (
        <p>No Expences Found.</p>
      ) : (
        filterExpences.map((arr) => (
          <ExpenceItem
            key={arr.id}
            title={arr.title}
            amount={arr.amount}
            date={arr.date}
          />
        ))
      )} */}
      {/* <ExpenceItem
        date={expences[0].date}
        title={expences[0].title}
        amount={expences[0].amount}
      />
      <ExpenceItem
        date={expences[1].date}
        title={expences[1].title}
        amount={expences[1].amount}
      />
      <ExpenceItem
        date={expences[2].date}
        title={expences[2].title}
        amount={expences[2].amount}
      />
      <ExpenceItem
        date={expences[3].date}
        title={expences[3].title}
        amount={expences[3].amount}
      />
      <ExpenceItem
        date={expences[4].date}
        title={expences[4].title}
        amount={expences[4].amount}
      /> */}
    </Card>
  );
};
export default Expence;
