import { useSelector } from "react-redux";
import TodoFormRedux from "../components/TodoFormRedux";
import TodoItemRedux from "../components/TodoItemRedux";

const TodoListRedux = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div className="bg-gradient-to-r from-teal-500 to-blue-500 min-h-screen py-8 pt-28">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg bg-white px-4 py-3 text-black">
        <h1 className="text-3xl font-bold text-center mb-8 mt-2">To Do List</h1>
        <div className="mb-4">
          <TodoFormRedux />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <TodoItemRedux todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoListRedux;
