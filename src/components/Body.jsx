import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";
import Totals from "./Totals";

export default function Body() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Form tasks={tasks} setTasks={setTasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
      <Totals tasks={tasks} />
    </div>
  );
}
