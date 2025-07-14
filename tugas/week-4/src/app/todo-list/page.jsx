"use client";

import { useState } from "react";
import TodoList from "@/components/todoComponents/todoList";
import TodoInput from "@/components/todoComponents/TodoInput";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleDone = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const editTodo = (id) => {
    const todo = todos.find(t => t.id === id);
    const newText = prompt("Edit todo:", todo.text);
    if (newText !== null && newText.trim()) {
      setTodos(todos.map(t => 
        t.id === id ? { ...t, text: newText.trim() } : t
      ));
    }
  };

  const deleteTodo = (id) => {
    const todo = todos.find(t => t.id === id);
    const confirmed = confirm(`Hapus todo: \"${todo.text}\"?`);
    if (confirmed) {
      setTodos(todos.filter(t => t.id !== id));
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-md space-y-4">
        <TodoInput input={input} setInput={setInput} addTodo={addTodo} />
        <TodoList todos={todos} toggleDone={toggleDone} editTodo={editTodo} deleteTodo={deleteTodo} />
      </div>
    </main>
  );
}
