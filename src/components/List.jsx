import React from "react";
import { useTodo } from "../context/TodoContext";

function List() {
  const { todo, todos, hide, setTodos } = useTodo();

  const checkTodo = (e) => {
    let newTodos = todos.map((todo) => {
      if (parseInt(todo.id) === parseInt(e.target.id)) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const removeTodo = (e) => {
    setTodos(todos.filter((todo) => Number(todo.id) !== Number(e.target.id)));
    //console.log(ind);
  };

  const isCompleted = (e) => {
    if (e.checked && hide === "All") {
      return "completed";
    } else if (e.checked && hide === "Active") {
      return "completed hidden";
    } else if (!e.checked && hide === "Completed") {
      return "hidden";
    }
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all"> Mark all as complete </label>

      <ul className="todo-list">
        {todos
          .filter((item) => {
            return todo.toLowerCase() === ""
              ? item.todo
              : item.todo.toLowerCase().includes(todo);
          })
          .map((item) => (
            <li className={isCompleted(item)} key={item.id}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  defaultChecked={item.checked}
                  onClick={checkTodo}
                  id={item.id}
                />
                <label>{item.todo}</label>
                <button
                  className="destroy"
                  id={item.id}
                  onClick={(e) => removeTodo(e)}
                ></button>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default List;
