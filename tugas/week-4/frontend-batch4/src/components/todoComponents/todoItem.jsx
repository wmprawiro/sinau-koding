import Button from './Button';

export default function TodoItem({ todo, toggleDone, editTodo, deleteTodo }) {
  return (
    <li className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-3 flex-grow px-4 py-2 rounded bg-white border border-gray-300">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleDone(todo.id)}
          className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 focus:ring-2 cursor-pointer"
        />
        <span className={`${
          todo.done ? "text-gray-500 line-through" : "text-gray-800"
        }`}>
          {todo.text}
        </span>
      </div>
      
      <div className="flex items-center gap-2">
        <Button
          onClick={() => editTodo(todo.id)}
          variant="primary"
          title="Edit todo"
        >
          Edit
        </Button>
        
        <Button
          onClick={() => deleteTodo(todo.id)}
          variant="danger"
          title="Delete todo"
        >
          Delete
        </Button>
      </div>
    </li>
  );
}
