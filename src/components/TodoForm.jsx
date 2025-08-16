import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import { motion } from "framer-motion";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-2 mt-5"
    >
      <input
        type="text"
        className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow transition"
      >
        Add
      </button>
    </motion.form>
  );
};

export default TodoForm;
