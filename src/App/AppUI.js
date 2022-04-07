import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
//una vez creado nuestro contexto podemos eliminar las props de los componentes Counter y Search, ya que ahora las van a consumir de nuestro TodoContext.Provider
function AppUI() {
  //usamos .useContext(TodoContext) para traer las props de nuestro provider y así evitamos tener que envolver todo en etiqueta <Consumer>
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      {/* El componente TodoList va a consumir nuestros estados loading y error, implementados dentro del custom Hook, y el resto de props (ahora en el index.js de la carpeta TodoContext), mediate useContext(TodoContext) */}

      <TodoList>
        {/* las lineas de error y loading/!loading funcionan como un condicional, si error es true entonces el contenido de la etiqueta <p>, (que es true por defecto) indican que se cumplen las dos condiciones del && y renderiza, y si error es false da igual xq ya no va a cumplir el && así que evalúa siguiente caso, loading y así. */}
        {error && (
          <p>
            <strong>🌋ERROR: </strong>Caos Muerte y Destrucción!
          </p>
        )}
        {loading && <p>Calmachicha tamo en eso ⏰</p>}
        {!loading && !searchedTodos.length && <h5>Crea tu primera tarea!🤓</h5>}
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
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}
export { AppUI };
