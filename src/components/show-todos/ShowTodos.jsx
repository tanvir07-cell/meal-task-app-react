import Swal from "sweetalert2";
import Button from "../button/Button";

function ShowTodos({ tasks, setTasks }) {
  const handleDeleteTaskById = (taskId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const filterTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(filterTasks);

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <ul style={{ marginTop: "1rem" }}>
      {tasks?.length ? (
        tasks.map((task) => (
          <li key="task.id" style={{ marginBottom: "1rem" }}>
            {task.task}({`Created At : ${task.createdAt}`}){" "}
            <Button
              text="X"
              variant="error"
              size="small"
              onClick={() => handleDeleteTaskById(task.id)}
            />
          </li>
        ))
      ) : (
        <p>OOPS! There is no list here 🤦‍♀️👀</p>
      )}
    </ul>
  );
}

export default ShowTodos;
