import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import EmptyTask from "./components/EmptyTask";
const App = () => {
  const [todos, setTodos] = useState([
    
  ]);


  return (
    <>
      <AppName />
      <AddTodo setNewTodo = {setTodos} todos = {todos} />

      {todos.length <= 0 ? <EmptyTask /> : null }
      
      <TodoItems Todos={todos} setNewTodo = {setTodos} />
    </>
  );
};

export default App;
