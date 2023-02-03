import { useRef, useEffect } from "react";
import { useTodo } from "../context/TodoContext";

function Header() {
  const { todo, setTodo, todos, setTodos } = useTodo();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return false;
    }
    setTodos([
      ...todos,
      {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
        todo: todo,
        checked: false,
      },
    ]);
    setTodo("");
    //console.log(todo);
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          ref={inputRef}
        />
      </form>
    </header>
  );
}

export default Header;
