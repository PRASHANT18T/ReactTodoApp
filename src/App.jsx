import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoProvider>
      <div className="max-w-lg mx-auto mt-10 p-6 border rounded-2xl shadow-lg bg-white">
        <h1 className="text-3xl font-bold text-center text-blue-600">🚀 Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
