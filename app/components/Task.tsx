"use client";

import { ITask } from "@/types/tasks";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { editTodo } from "@/api";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
    });
    setTaskToEdit("");
    setOpenModalEdit(false);
    router.refresh();
  };

  return (
    <tr key={task.id} className="border-b border-solid">
      <td className="w-full p-4">{task.text}</td>
      <td className="flex gap-5 p-4">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          size={20}
          className="text-blue-500"
        />

        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="text-lg font-bold text-gray-700">Edit Task</h3>
            <div className="flex gap-2 mt-5">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="w-full px-3 py-2 border rounded-md outline-none"
              />
              <button
                className="px-4 font-semibold text-white capitalize transition-colors duration-300 ease-in-out bg-purple-600 rounded-md hover:bg-purple-700"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>

        <FiTrash2 cursor="pointer" size={20} className="text-red-500" />
      </td>
    </tr>
  );
};
export default Task;
