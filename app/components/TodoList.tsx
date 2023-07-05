import { ITask } from "@/types/tasks";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div>
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-4">Tasks</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="p-4">{task.text}</td>
              <td className="p-4">Football</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TodoList;
