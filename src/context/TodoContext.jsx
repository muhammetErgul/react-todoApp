import { useContext, createContext, useState, useEffect } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [selectBtn, setSelectBtn] = useState("selected", "", "");
  const [hide, setHide] = useState("All");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const data = {
    todo,
    setTodo,
    todos,
    setTodos,
    selectBtn,
    setSelectBtn,
    hide,
    setHide,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default Provider;

export const useTodo = () => useContext(Context);
