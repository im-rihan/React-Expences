import React, { useState } from "react";
import "./Expennceform.css";
const NewExpenceForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenceData = {
      title: enteredTitle,
  amount: +enteredAmount,
  date: new Date(enteredDate),
    };

    props.onSaveExpenceData(expenceData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expence-controls">
        <div className="new-expence-control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div className="new-expence-control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expence-control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expence-actions">
        <button type="submit">Add Expence</button>
      </div>
    </form>
  );
};

export default NewExpenceForm;
