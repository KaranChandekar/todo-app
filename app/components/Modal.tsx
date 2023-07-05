interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
    <div
      className={`${
        modalOpen
          ? "fixed flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-500 bg-opacity-50"
          : "hidden"
      }`}
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative p-6 bg-white rounded-lg shadow">
          <button
            onClick={() => setModalOpen(false)}
            type="button"
            className="absolute inline-flex items-center justify-center w-6 h-6 ml-auto text-sm text-white transition-colors duration-300 ease-in-out bg-purple-600 rounded-full top-3 right-3 hover:bg-purple-700"
            data-modal-hide="popup-modal"
          >
            <svg
              className="w-2 h-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};
export default Modal;
