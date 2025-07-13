import Button from './Button';

export default function TodoInput({ input, setInput, addTodo }) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Masukkan Task Baru"
        className="flex-grow px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button onClick={addTodo} variant="primary">
        Add Task
      </Button>
    </div>
  );
}
