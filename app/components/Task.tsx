import { ITask } from "@/types/tasks";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <tr key={task.id}>
      <td className="p-4">{task.text}</td>
      <td className="p-4">Football</td>
    </tr>
  );
};
export default Task;
