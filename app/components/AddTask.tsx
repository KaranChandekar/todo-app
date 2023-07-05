"use client";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="flex items-center justify-center w-full gap-3 px-6 py-3 font-semibold text-white capitalize transition-colors duration-300 ease-in-out bg-purple-600 rounded-md hover:bg-purple-700"
      >
        Add new task <AiOutlinePlus size={20} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form>
          <h3 className="text-lg font-bold text-gray-700">Add New Task</h3>
          <div className="flex gap-2 mt-5">
            <input
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
    </div>
  );
};
export default AddTask;
