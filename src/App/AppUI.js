import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      {/* pasando estado de papá a hijo */}

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      {/* componente parent App pasa el estado como props al children TodoSearch */}
      {/* Acá tenemos que cablear la función completeTodos */}
      <TodoList>
        {error && (
          <p>
            <strong>🌋ERROR: </strong>Caos Muerte y Destrucción!
          </p>
        )}
        {loading && <p>Calmachicha tamo en eso ⏰</p>}
        {!loading && !searchedTodos.length && <h5>Crea tu primera tarea!🤓</h5>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={
              todo.text
            } /* //el atributo "key" debe ser un identificador único para c/item, en éste caso el texto del todo */
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)} //creamos atributo onComplete que va a llamar a la función pasandole su identificador único, todo.text. Este atributo lo pasamos al método onclick de nuestro span✔️ en todoItem
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}
export { AppUI };
