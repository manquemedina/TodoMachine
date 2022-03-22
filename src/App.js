import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { useState } from "react";

const todosHardcodea2 = [
  { text: "shambular primero", completed: false },
  { text: "bambular después", completed: false },
  { text: "shmegels", completed: true },
  { text: "sqhieefjsdkdf", completed: false },
];

function App() {
  const [searchValue, setSearchValue] = useState(""); //estado levantado desde TodoSearch para que sea accesible por los demas componentes
  const [todos, setTodos] = useState(todosHardcodea2);
  const totalTodos = todos.length; //cantidad de tareas en nuestro estado
  const completedTodos = todos.filter((todo) => !!todo.completed).length; //.filter() itera por cada item de nuestro array "todos" (nuestro estado) y la arrow func pasada al metodo filter nos devuelve los items que tengan el atributo completed como "true". El .length del final nos devuelve el largo del array retornado por e .filter, dándonos la cantidad de tareas resueltas.

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      {/* pasando estado de papá a hijo */}
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      {/* componente parent App pasa el estado como props al children TodoSearch */}
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
