import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  { text: "shambular", completed: false },
  { text: "bambular", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} /> //el atributo "key" funciona como identificador único para cada item, cosas de react mijo
        ))}
      </TodoList>
      <CreateTodoButton/>  
    </>
  );
}

export default App;
