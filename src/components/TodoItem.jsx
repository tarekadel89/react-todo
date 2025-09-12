import Styles from "./todoItem.module.css";

export default function TodoItem({ item, onDelete, onComplete, onReset }) {
  return (
    <li className={Styles.todoItemRow}>
      <span
        className={`${Styles.todoItem} ${item.done ? Styles.completed : ""}`}
      >
        {item.value}
      </span>
      <button
        className={Styles.deleteButton}
        onClick={onDelete}
        aria-label="Delete"
      >
        ×
      </button>
      {!item.done && (
        <button
          className={Styles.completeButton}
          onClick={onComplete}
          aria-label="Complete"
        >
          ✓
        </button>
      )}

      {item.done && (
        <button
          className={Styles.resetButton}
          onClick={onReset}
          aria-label="Reset"
        >
          ⟳
        </button>
      )}
    </li>
  );
}
