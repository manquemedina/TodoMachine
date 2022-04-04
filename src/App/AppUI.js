import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
//una vez creado nuestro contexto podemos eliminar las props de los componentes Counter y Search, ya que ahora las van a consumir de nuestro TodoContext.Provider
function AppUI() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      {/* El componente TodoList va a consumir nuestros estados loading y error, implementados dentro del custom Hook, y el resto de props (ahora en el index.js de la carpeta TodoContext), entonces lo envolvemos en la etiqueta de .Consumer */}
      <TodoContext.Consumer>
        {/* Dentro de la etiqueta consumer en vez de pasar directamente las props lo que hacemos es crear una función que reciba nuestro objeto "value" asignado al .Provider */}

        {({ error, loading, searchedTodos, completeTodo, deleteTodo }) => (
          <TodoList>
            {error && (
              <p>
                <strong>🌋ERROR: </strong>Caos Muerte y Destrucción!
              </p>
            )}
            {loading && <p>Calmachicha tamo en eso ⏰</p>}
            {!loading && !searchedTodos.length && (
              <h5>Crea tu primera tarea!🤓</h5>
            )}
            ;
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
        )}
      </TodoContext.Consumer>
      <CreateTodoButton />
    </>
  );
}
export { AppUI };
