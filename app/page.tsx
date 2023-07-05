import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);

  return (
    <main className="max-w-4xl mx-auto mt-6">
      <h1 className="mb-10 text-2xl font-bold text-center text-gray-700">
        Task Management App
      </h1>
      <div className="flex flex-col gap-4 text-center">
        <AddTask />
        <TodoList tasks={tasks} />
      </div>
    </main>
  );
}
