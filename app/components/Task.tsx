"use client";

import { ITask } from "@/types/tasks";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

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

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDeleted(false);
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

        <FiTrash2
          onClick={() => setOpenModalDeleted(true)}
          cursor="pointer"
          size={20}
          className="text-red-500"
        />
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <svg
            className="w-8 h-8 mx-auto mb-4 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h3 className="mb-5 text-lg font-normal text-center text-gray-7000">
            Are you sure you want to delete this task?
          </h3>
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => handleDeleteTask(task.id)}
              type="submit"
              className="text-white bg-red-600 hover:bg-red-700 focus:outline-none font-semibold rounded-md px-4 py-2.5"
            >
              Yes, I'm sure
            </button>
            <button
              className="px-4 py-2.5 font-semibold text-white capitalize ease-in-out focus:outline-none bg-purple-600 rounded-md hover:bg-purple-700"
              type="submit"
            >
              No, cancel
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};
export default Task;
