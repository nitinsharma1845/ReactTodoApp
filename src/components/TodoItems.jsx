import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItems = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const handleDelete = (index) => {
    const newTodos = todos.filter((value, filIndex) => {
      return filIndex !== index;
    });
    setTodos(newTodos);
  };

  return (
    <div className="px-5 md:w-[600px] md:m-auto">
      {todos.map((Todo, index) => (
        <li
          key={index}
          className="list-none pl-5 rounded-lg font-semibold mb-3 h-full bg-gray-800 w-full flex items-center justify-between"
        >
          {Todo.title}
          <span>
            <button
              onClick={() => handleDelete(index)}
              className="p-2 bg-red-500 rounded-r-lg w-[100%]"
            >
              Delete
            </button>
          </span>
        </li>
      ))}
    </div>
  );
};

export default TodoItems;
