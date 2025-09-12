import TodoItem from "./TodoItem";
import Styles from "./todolist.module.css";

export default function TodoList({ tasks, setTasks }) {
  const handleDelete = (indexToDelete) => {
    setTasks(tasks.filter((_, idx) => idx !== indexToDelete));
  };

  const handleComplete = (indexToComplete) => {
    tasks[indexToComplete].done = true;
    setTasks([...tasks]);
  };

  const handleReset = (indexToReset) => {
    tasks[indexToReset].done = false;
    setTasks([...tasks]);
  };

  const sortedTasks = tasks.slice().sort((a, b) => {
    if (a.done !== b.done)
      return Number(a.done) - Number(b.done) || a.id - b.id;
    return a.id - b.id;
  });

  return (
    <ul className={Styles.todoList}>
      {sortedTasks.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onDelete={() => handleDelete(tasks.indexOf(item))}
          onComplete={() => handleComplete(tasks.indexOf(item))}
          onReset={() => handleReset(tasks.indexOf(item))}
        />
      ))}
    </ul>
  );
}
