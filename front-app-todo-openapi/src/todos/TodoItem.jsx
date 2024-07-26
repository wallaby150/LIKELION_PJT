import { useNavigate } from "react-router-dom";

const TodoItem = ({ todoItem, callbacks }) => {
  const navigate = useNavigate();

  let itemClassName = "list-group-item";
  if (todoItem.done)
    itemClassName += " list-group-item-success text-decoration-line-through";

  return (
    <li className={itemClassName}>
      <span
        onClick={() => {
          callbacks.toggleDone(todoItem.id);
        }}
        title={todoItem.desc}
      >
        {todoItem.todo}
      </span>
      <span
        className="float-end badge bg-secondary pointer p-2 m-1"
        onClick={() => {
          navigate("/todos/edit/" + todoItem.id);
        }}
      >
        편집
      </span>
      <span
        className="float-end badge bg-secondary pointer p-2 m-1"
        onClick={() => {
          callbacks.deleteTodo(todoItem.id);
        }}
      >
        삭제
      </span>
    </li>
  );
};

export default TodoItem;
