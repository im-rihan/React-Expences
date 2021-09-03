import React from "react";
import "./ExpenceFilter.css";
const ExpencesFilter = (props) => {
  const dropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
    // console.log(props.onChangefilter(event.target.value));
  };

  return (
    <div className="expences-filter">
      <div className="expences-filter-control">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={dropdownHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
export default ExpencesFilter;
