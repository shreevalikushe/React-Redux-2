import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
} from "../store/actions";

export function Todo() {
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const { loading, error, todos } = useSelector((state) => ({
    loading: state.loading,
    error: state.error,
    todos: state.todos,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos();
  }, [page]);
  const getTodos = () => {
    dispatch(getTodoLoading());
    fetch(`http://localhost:3001/todos?_page=${page}&_limit=2`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(getTodoSuccess(res));
      })
      .catch((err) => dispatch(getTodoError(err)));
  };
  const addTodo = () => {
    dispatch(addTodoLoading());
    fetch("http://localhost:3001/todos", {
      method: "POST",
      body: JSON.stringify({ status: false, title: text }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => dispatch(addTodoSuccess(res)))
      .catch((err) => dispatch(addTodoError(err)));
    getTodos();
  };
  return loading ? (
    <div>...loading</div>
  ) : error ? (
    <div>something went wrong</div>
  ) : (
    <div>
      <h3>TODO APPLICATION</h3>
      <input
        placeholder="ADD TODOS"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addTodo()}>Add</button>
      {todos.map((e) => (
        <div key={e.id}>
          {" "}
          <h3>
            {e.title} - {e.status ? "DONE" : "NOT DONE"}{" "}
          </h3>{" "}
        </div>
      ))}
      <div>
        <button onClick={() => setPage((prev) => prev - 1)}>Previous</button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
}
