import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditTodo = ({ states, callbacks }) => {
  const navigate = useNavigate();

  let { id } = useParams();
  let todoItem = states.todoList.find(
    (item) => item.id === parseInt(id ? id : "0")
  );
  console.log(todoItem);
  let [todo, setTodo] = useState(todoItem.todo);
  let [desc, setDesc] = useState(todoItem.desc);

  const editTodoHandler = () => {
    if (todo.trim() === "" || desc.trim() === "") {
      alert("반드시 할일, 설명을 입력해야 합니다.");
      return;
    }

    callbacks.updateTodo(todoItem.id, todo, desc, todoItem.done, () => {
      navigate("/todos");
    });
  };

  return (
    <>
      <div className="row">
        <div className="col p-3">
          <h2 className="text-center">할일 변경</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group mb-3">
            <label htmlFor="todo" className="mb-1">
              할일
            </label>
            <input
              type="text"
              className="form-control"
              id="todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="desc" className="mb-1">
              설명
            </label>
            <textarea
              className="form-control"
              rows={3}
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group d-flex justify-content-end">
            <button className="btn btn-primary m-1" onClick={editTodoHandler}>
              수정
            </button>
            <button
              className="btn btn-secondary m-1"
              onClick={() => navigate("/todos")}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
