import Swal from "sweetalert2";
import Button from "../button/Button";

function DeleteTodos({ setTasks, tasks }) {
  const handleDeleteTodos = () => {
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
        setTasks([]);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <>
      {tasks?.length ? (
        <Button
          text="Delete All"
          size="medium"
          variant="error"
          onClick={handleDeleteTodos}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default DeleteTodos;
