import ExpenceDate from "./ExpenceDate";
import Card from "../UI/Card";

const ExpenceItem = (props) => {
  return (
    <li>
      <Card className="expence-item">
        <ExpenceDate date={props.date} />
        <div className="expence-item-description">
          <h2>{props.title}</h2>
          <div className="expence-item-price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenceItem;
