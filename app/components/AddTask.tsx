import { AiOutlinePlus } from "react-icons/ai";

const AddTask = () => {
  return (
    <div>
      <button className="flex items-center justify-center w-full gap-3 px-6 py-3 font-semibold text-white capitalize transition-colors duration-300 ease-in-out bg-purple-600 rounded-md hover:bg-purple-700">
        Add new task <AiOutlinePlus size={20} />
      </button>
    </div>
  );
};
export default AddTask;
