import Button from "./Button";
import Field from "./Field";

const AddTaskForm = ({ addTask }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    addTask();
  }
  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field className="todo__field" label="New Task Title" id="new-task" />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddTaskForm;
