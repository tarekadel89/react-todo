import Styles from "./totals.module.css";

export default function Totals({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.done).length;
  const pending = total - completed;
  return (
    <div className={Styles.totalsContainer}>
      <span>Total Tasks: {total}</span>
      <span>Completed Tasks: {completed}</span>
      <span>Pending Tasks: {pending}</span>
    </div>
  );
}
