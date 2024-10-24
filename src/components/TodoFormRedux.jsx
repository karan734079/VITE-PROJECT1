import { useDispatch } from "react-redux";
import { addTodo } from '../store/todoSlice';
import { useState } from "react";

const TodoFormRedux = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      dispatch(addTodo({ todo }));
      setTodo("");
    }
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 focus:outline-none focus:ring-1 focus:ring-black bg-white/20 py-1.5"
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
};

export default TodoFormRedux;
