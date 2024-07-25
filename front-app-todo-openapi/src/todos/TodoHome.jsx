import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const TodoHome = ({ states, callbacks }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<TodoList states={states} callbacks={callbacks} />}
      ></Route>
      <Route path="add" element={<AddTodo callbacks={callbacks} />}></Route>
    </Routes>
  );
};

export default TodoHome;
