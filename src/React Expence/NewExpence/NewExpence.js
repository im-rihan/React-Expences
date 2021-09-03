import React from "react";
import "./newExpence.css";
import NewExpenceForm from "./NewExpenceForm";
const NewExpence = (props) => {
  const saveExpenceDataHandler = (enteredExpenceData) => {
    const expenceData = {
      ...enteredExpenceData,id:Math.random().toString(),
    };
    props.onAddExpenceData(expenceData);
    // console.log(expenceData);
    // console.log(enteredExpenceData);
  };
  return (
    <div className="new-expence">
      <NewExpenceForm onSaveExpenceData={saveExpenceDataHandler} />
    </div>
  );
};

export default NewExpence;
