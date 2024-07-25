import { useEffect, useState } from "react";
import TodoHome from "./TodoHome";
import { produce } from "immer";
import axios from "axios";

const BASEURL = "http://localhost:8000/todolist/gdhong";

const TodoContainer = () => {
  let [todoList, setTodoList] = useState([]);

  const fetchTodoList = async () => {
    setTodoList([]);
    try {
      const response = await axios.get(BASEURL);
      setTodoList(response.data);
    } catch (e) {
      if (e instanceof Error) alert("조회실패 : " + e.message);
      else alert("조회실패 : " + e);
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  const addTodo = async (todo, desc, callback) => {
    try {
      const response = await axios.post(BASEURL, { todo, desc });
      if (response.data.status === "success") {
        let newTodoList = produce(todoList, (draft) => {
          draft.push({ ...response.data.item, cone: false });
        });
        setTodoList(newTodoList);
        callback();
      } else {
        pass;
      }
    } catch (e) {
      if (e instanceof Error) alert("등록실패 : " + e.message);
      else alert("등록실패 : " + e);
    }
  };

  const updateTodo = async (id, todo, desc, done, callback) => {
    try {
      const response = await axios.put(`${BASEURL}/${id}`, {
        todo,
        desc,
        done,
      });
      if (response.data.status === "success") {
        let index = todoList.findIndex((todo) => todo.id === id);
        let newTodoList = produce(todoList, (draft) => {
          draft[index] = { ...draft[index], todo, desc, done };
        });
        setTodoList(newTodoList);
        console.log("수정 완료");

        callback();
      }
    } catch (e) {
      if (e instanceof Error) alert("수정 실패 : " + e.message);
      else alert("수정 실패 : " + e);
    }
  };

  const toggleDone = async (id) => {
    try {
      let todoItem = todoList.find((todo) => todo.id === id);
      const response = await axios.put(`${BASEURL}/${id}`, {
        ...todoItem,
        done: !todoItem.done,
      });
      if (response.data.status === "success") {
        let index = todoList.findIndex((todo) => todo.id === id);

        let newTodoList = produce(todoList, (draft) => {
          draft[index].done = !draft[index].done;
        });
        setTodoList(newTodoList);
      }
    } catch (e) {}
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`${BASEURL}/${id}`);
      if (response.data.status === "success") {
        let index = todoList.findIndex((todo) => todo.id === id);

        let newTodoList = produce(todoList, (draft) => {
          draft[index].splice(index, 1);
        });
        setTodoList(newTodoList);
      }
    } catch (e) {}
  };

  const callbacks = { addTodo, updateTodo, toggleDone, deleteTodo };
  const states = { todoList };

  return <TodoHome callbacks={callbacks} states={states} />;
};

export default TodoContainer;
