import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import TodoProvider from "./context/TodoContext";

function App() {
  return (
    <section className="todoapp">
      <TodoProvider>
        <Header />
        <List />
        <Footer />
      </TodoProvider>
    </section>
  );
}

export default App;
