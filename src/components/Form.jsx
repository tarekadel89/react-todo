import Styles from "./form.module.css";
import { useState } from "react";

export default function Form({ tasks, setTasks }) {
  const [task, setTask] = useState({ value: "", done: false });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTasks([
          ...tasks,
          {
            ...task,
            id: Date.now(),
            originalIndex: tasks.length,
          },
        ]);
        setTask({ value: "", done: false });
      }}
    >
      <div className={Styles.inputWrapper}>
        <input
          className={Styles.todoInput}
          type="text"
          value={task.value}
          onChange={(e) => setTask({ ...task, value: e.target.value })}
          placeholder="Enter a task"
          name="task"
        />
        <button
          className={Styles.addButton}
          type="submit"
          aria-label="Add Task"
        >
          +
        </button>
      </div>
    </form>
  );
}
