import { useNavigate } from "react-router-dom";

const TodoItem = ({ todoItem, callbacks }) => {
  const navigate = useNavigate();

  return (
    <li
      className={`list-group-item d-flex align-items-center justify-content-between ${
        todoItem.done
          ? "list-group-item-success text-decoration-line-through"
          : ""
      }`}
    >
      <div>
        <input
          type="checkbox"
          className="me-2"
          checked={todoItem.done}
          role="button"
          onChange={() => callbacks.toggleDone(todoItem.id)}
        ></input>

        <span title={todoItem.desc}>{todoItem.todo}</span>
      </div>
      <div>
        <span
          className="float-end badge bg-danger pointer p-2 m-1"
          role="button"
          onClick={() => {
            callbacks.deleteTodo(todoItem.id);
          }}
        >
          삭제
        </span>
        <span
          className="float-end badge bg-dark pointer p-2 m-1"
          role="button"
          onClick={() => {
            navigate("/todos/edit/" + todoItem.id);
          }}
        >
          편집
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
