import { createContext, useMemo } from "react";
import useTasks from "./useTasks";
import useIncompleteTaskScroll from "./useIncompleteTaskScroll";

const TasksContext = createContext({});

const TasksProvider = ({ children }) => {
  const {
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,
    newTaskTitle,
    newTaskInputRef,
    setNewTaskTitle,
    searchQuery,
    setSearchQuery,
    addTask,
    disappearingTaskId,
    appearingTaskId,
  } = useTasks();

  const { firstIncompleteTaskRef, firstIncompleteTaskId } =
    useIncompleteTaskScroll(tasks);

  const value = useMemo(
    () => ({
      tasks,
      filteredTasks,
      deleteTask,
      deleteAllTasks,
      toggleTaskComplete,
      newTaskTitle,
      newTaskInputRef,
      setNewTaskTitle,
      searchQuery,
      setSearchQuery,
      addTask,
      disappearingTaskId,
      appearingTaskId,
      firstIncompleteTaskRef,
      firstIncompleteTaskId,
    }),
    [
      tasks,
      filteredTasks,
      deleteTask,
      deleteAllTasks,
      toggleTaskComplete,
      newTaskTitle,
      newTaskInputRef,
      setNewTaskTitle,
      searchQuery,
      setSearchQuery,
      addTask,
      disappearingTaskId,
      appearingTaskId,
      firstIncompleteTaskRef,
      firstIncompleteTaskId,
    ],
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
