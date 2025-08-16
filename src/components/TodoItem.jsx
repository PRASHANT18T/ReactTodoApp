import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import { motion } from "framer-motion";

const TodoItem = ({ todo }) => {
  const { updateTodo, deleteTodo, toggeleTodo } = useTodoContext();
  const [text, setText] = useState(todo.text);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const handleUpdate = () => {
    if (text.trim()) {
      updateTodo(todo.id, text);
      setIsTodoEditable(false); // back to edit button
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      layout
      className="flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-xl shadow-sm"
    >
      <div className="flex items-center gap-2 w-full">
        {/* ✅ Checkbox toggle */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggeleTodo(todo.id)}
          className="w-5 h-5 accent-green-500 cursor-pointer"
        />

        {isTodoEditable ? (
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border p-2 rounded w-full"
          />
        ) : (
          <span
            className={`cursor-pointer text-lg ${
              todo.completed ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        {isTodoEditable ? (
          <button
            onClick={handleUpdate}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg transition"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsTodoEditable(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg transition"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default TodoItem;
