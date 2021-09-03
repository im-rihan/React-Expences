import "./expencedate.css";

const ExpenceDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expence-date">
      <div className="expence-date-month">{month}</div>
      <div className="expence-date-year">{year}</div>
      <div className="expence-date-day">{day}</div>
    </div>
  );
};
export default ExpenceDate;
