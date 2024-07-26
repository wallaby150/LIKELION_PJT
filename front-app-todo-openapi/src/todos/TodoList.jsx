import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";

const TodoList = ({ states, callbacks }) => {
  let todoItems = states.todoList.map((item) => {
    return <TodoItem key={item.id} todoItem={item} callbacks={callbacks} />;
  });

  return (
    <>
      <h3 className="text-center">할일 목록</h3>

      <div className="row">
        <div className="col p-3 d-flex justify-content-end">
          <Link className="btn btn-primary" to="/todos/add">
            할일추가
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="list-group">{todoItems}</ul>
        </div>
      </div>
    </>
  );
};

export default TodoList;
