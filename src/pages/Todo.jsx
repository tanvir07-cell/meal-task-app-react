import Button from "../components/button/Button";
import Layout from "../components/Layout/Layout";
import Swal from "sweetalert2";

import { useEffect, useState } from "react";
import ShowTodos from "../components/show-todos/ShowTodos";
import shortid from "shortid";
import DeleteTodos from "../components/delete-todos/DeleteTodos";

// get tasks to the localStorage:
function getTasksFromLocalStorage() {
  const data = localStorage.getItem("tasks");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

function Todo() {
  const [tasks, setTasks] = useState(getTasksFromLocalStorage);

  const handleBtnTodo = async (e) => {
    const { value: task } = await Swal.fire({
      title: "Input task",
      input: "text",

      inputPlaceholder: "Enter your task",
    });

    if (task) {
      Swal.fire(`Entered Task is : ${task}`);
    }

    const allTaskInfo = {
      task,
      isCompleted: false,
      createdAt: new Date().toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      id: shortid.generate(),
    };
    if (allTaskInfo.task) {
      setTasks([allTaskInfo, ...tasks]);
    }
  };

  //   set to the localStorage:
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Layout>
      <Button
        text="Add Task"
        variant="primary"
        size="medium"
        onClick={handleBtnTodo}
      ></Button>
      <ShowTodos tasks={tasks} setTasks={setTasks}></ShowTodos>
      <DeleteTodos setTasks={setTasks} tasks={tasks}></DeleteTodos>
    </Layout>
  );
}

export default Todo;
