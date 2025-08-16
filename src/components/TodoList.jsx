import { useTodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";

export default function TodoList() {
  const { todos } = useTodoContext();

  return (
    <motion.div layout className="mt-5 space-y-3">
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center">✨ No tasks yet. Add one!</p>
      ) : (
        <AnimatePresence>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </AnimatePresence>
      )}
    </motion.div>
  );
}
