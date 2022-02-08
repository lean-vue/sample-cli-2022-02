// LocalStorage helper methods
import type Todo from "@/model/todo";

const loadTodos = (): Todo[] => JSON.parse(localStorage.todos || "[]");
const saveTodos = (todos: Todo[]) => (localStorage.todos = JSON.stringify(todos));
const generateId = (): number => {
  const nextId = JSON.parse(localStorage.lastId || "0") + 1;
  localStorage.lastId = nextId;
  return nextId;
};

// Persistence API
const getAll = async (): Promise<Todo[]> => {
  return loadTodos();
};
const createTodo = async (title: string): Promise<Todo> => {
  const todo = { id: generateId(), title, completed: false };
  saveTodos([...loadTodos(), todo]);
  return todo;
};
const updateTodo = async (id: number, changes: Partial<Omit<Todo, "id">>): Promise<Todo> => {
  const todos = loadTodos();
  const todoToUpdate = todos.find((t) => t.id === id) as Todo;
  const updatedTodo = { ...todoToUpdate, ...changes };
  saveTodos(todos.map((t) => (t.id === id ? updatedTodo : t)));
  return updatedTodo;
};
const deleteTodo = async (id: number): Promise<void> => {
  saveTodos(loadTodos().filter((t) => t.id !== id));
};

// Exporting API
export { getAll, createTodo, updateTodo, deleteTodo };
