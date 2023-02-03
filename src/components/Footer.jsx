import React from "react";
import { useTodo } from "../context/TodoContext";

function Footer() {
  const { todos, setTodos, selectBtn, setSelectBtn, setHide } = useTodo();

  const unCompleted = todos.filter((todo) => todo.checked === false);
  const clearCompletedTodo = () => {
    setTodos(todos.filter((todo) => todo.checked === false));
  };

  const selectedBtn = (e) => {
    switch (e.target.id) {
      case "All":
        setSelectBtn(["selected", "", ""]);
        setHide("All");
        break;
      case "Active":
        setSelectBtn(["", "selected", ""]);
        setHide("Active");
        break;
      case "Completed":
        setSelectBtn(["", "", "selected"]);
        setHide("Completed");
        break;
    }
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{unCompleted.length}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className={selectBtn[0]} id="All" onClick={selectedBtn}>
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={selectBtn[1]}
            id="Active"
            onClick={selectedBtn}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={selectBtn[2]}
            id="Completed"
            onClick={selectedBtn}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompletedTodo}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
