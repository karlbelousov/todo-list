import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import Button from "./Button";
import Field from "./Field";

const AddTaskForm = () => {
  const { addTask, newTaskTitle, newTaskInputRef, setNewTaskTitle } =
    useContext(TasksContext);

  const onSubmit = (event) => {
    event.preventDefault();
    addTask();
  };
  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        label="New Task Title"
        id="new-task"
        value={newTaskTitle}
        onInput={(event) => setNewTaskTitle(event.target.value)}
        ref={newTaskInputRef}
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddTaskForm;
