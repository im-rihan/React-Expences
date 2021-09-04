import React, { useState } from "react";
import Expence from "./React Expence/Expences/Expense";
import NewExpence from "./React Expence/NewExpence/NewExpence";
import Api from "./React Expence/Expences/Api";

const App = (props) => {
  const [ApiData, setApiData] = useState(Api);
  const addExpenceHandler = (expence) => {
    setApiData((prevApi) => {
      return [expence, ...prevApi];
    });
  };
  // const filterExpences = props.filterExpences;
  return (
    <>
      <NewExpence onAddExpenceData={addExpenceHandler} />
      <Expence items={ApiData} />
    </>
  );
};
export default App;
