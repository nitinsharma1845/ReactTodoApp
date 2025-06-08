import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import EmptyTask from "./components/EmptyTask";

import { TodoContext } from "./context/TodoContext";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <AppName />
      <AddTodo />

      {todos.length <= 0 ? <EmptyTask /> : null}

      <TodoItems />
    </TodoContext.Provider>
  );
};

export default App;
