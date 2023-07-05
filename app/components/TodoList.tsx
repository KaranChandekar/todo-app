import { ITask } from "@/types/tasks";
import Task from "./Task";

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
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TodoList;
