import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { useState } from "react";

const todos = [
  { text: "shambular", completed: false },
  { text: "bambular", completed: false },
];

function App() {
  const [searchValue, setSearchValue] = useState(""); //estado levantado desde TodoSearch para que sea accesible por los demas componentes
  return (
    <>
      <TodoCounter />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />{/* componente parent App pasa el estado como props al children TodoSearch */}

      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} /> //el atributo "key" funciona como identificador único para cada item, cosas de react mijo
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
