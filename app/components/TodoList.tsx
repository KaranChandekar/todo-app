const TodoList = () => {
  return (
    <div>
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Desc</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr>
            <td className="p-4">Play</td>
            <td className="p-4">Football</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TodoList;
