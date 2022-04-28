import React from "react";
import styled from "styled-components";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
/* import { TodoSearch } from "../TodoSearch"; */
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { Header, typeWritterImg } from "../Header";

/* const amarillo = "#eac253";
const grisOscuro = "#333";
const grisCLaro = "#777"; */

const PageWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #333;
`;
const TodoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 592px) {
    flex-direction: column;
  } ;
`;
const AddTaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.5rem 1rem 1rem;
  border-radius: 10px;
  background-color: #eac253;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

const LoadingCard = styled.div`
  background-color: #777;
  color: #333;
  font-size: 1.2em;
  margin: 0rem 2rem;
  text-align: center;
  font-family: "Quicksand", sans-serif;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  opacity: 0.9;
`;
const Span = styled.span`
  color: #888;
`;

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
    <PageWrapper>
      <Header>
        <Span>N</Span>⊙﹏⊙<Span>tas!</Span>
      </Header>
      <TodoCounter />
      {/* El componente TodoList va a consumir nuestros estados loading y error, implementados dentro del custom Hook, y el resto de props (ahora en el index.js de la carpeta TodoContext), mediate useContext(TodoContext) */}
      <TodoWrapper>
        <AddTaskWrapper>
          <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
          {typeWritterImg}
        </AddTaskWrapper>

        <TodoList>
          {/* las lineas de error y loading/!loading funcionan como un condicional, si error es true entonces el contenido de la etiqueta <p>, (que es true por defecto) indican que se cumplen las dos condiciones del && y renderiza, y si error es false da igual xq ya no va a cumplir el && así que evalúa siguiente caso, loading y así. */}
          {error && <LoadingCard>ups! ಥ﹏ಥ</LoadingCard>}
          {loading && (
            <LoadingCard>
              <h2>Cargando notas 📀</h2>
            </LoadingCard>
          )}
          {!loading && !searchedTodos.length && (
            <LoadingCard>
              <h2>Agrega tu primera nota! ✐ </h2>
            </LoadingCard>
          )}

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
      </TodoWrapper>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </PageWrapper>
  );
}
export { AppUI };
