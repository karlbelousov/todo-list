import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";
import TodoInfo from "../TodoInfo/TodoInfo";
import TodoList from "../TodoList/TodoList";
import Button from "../Button/Button";
import AddTaskForm from './../AddTaskForm/AddTaskForm';
import SearchTaskForm from './../SearchTaskForm/SearchTaskForm';
import styles from "./Todo.module.scss";

const Todo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext)
  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <Button
        onClick={() =>
          firstIncompleteTaskRef.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Show first incomplete task
      </Button>
      <TodoList />
    </div>
  );
};

export default Todo;
