import AddTask from "./components/AddTask";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-6">
      <div className="flex flex-col gap-4 my-5 text-center">
        <h1 className="text-2xl font-bold">Task Management App</h1>
        <AddTask />
      </div>
    </main>
  );
}
