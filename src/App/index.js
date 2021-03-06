import React from "react";
import styled from "styled-components";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { Header, typeWritterImg } from "../Header";

//LOS COLORE
/* const amarillo = "#eac253";
const grisOscuro = "#333";
const grisCLaro = "#777"; */

//LOS ESTILOS

//WRAPPERS
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
  margin: 1rem 0.5rem 1rem 1rem;
  border-radius: 10px;
  background-color: #eac253;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;
//LOADING CARD
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
//HEADER SPANS
const Span = styled.span`
  color: #fff;
`;
const Span2 = styled.span`
  color: #eac253;
`;
//MediaQuerie para la imágen de typewritter
const ImgDiv = styled.div`
  @media (max-width: 592px) {
    display: none;
  } ;
`;
//Divs de TodoCounter
const CounterDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  margin: 1rem 1rem;
  text-align: center;
  color: #fff;
  background-color: #8c8c8c;
  /* opacity: 0.7; */
  font-size: 1.2rem;
  font-family: "Quicksand", sans-serif;
  border-radius: 10px;
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  } ;
`;
const CounterH2 = styled.h2`
  margin: 2rem;
`;
const YellowSpan = styled.span`
  color: #eac253;
`;
//Divs del TodoSearch
const TodoSearchDiv = styled.div`
  display: flex;

  background-color: #8c8c8c;
  text-align: right;
  padding: 0.5rem;
  justify-items: center;
  align-items: center;
  @media (max-width: 425px) {
    flex-direction: column;
    margin: 1rem;
  } /* justify-content: space-between; */
`;
const SearchInput = styled.input`
  height: 1.5rem;
  width: 8rem;
  margin-right: 1rem;
  border-radius: 10px;
  text-align: center;
  font-size: 1rem;
  font-family: "Quicksand", sans-serif;
  transition: all 0.25s;
  :hover {
    width: 16rem;
    border: 2px solid #8c8c8c;
  }
  :focus {
    width: 16rem;
    border: 2px solid #8c8c8c;
  }
  :active {
    width: 16rem;
    border: 2px solid #8c8c8c;
  }
  @media (max-width: 460px) {
    margin-right: 0;
    :hover {
      width: 8rem;
      border: 2px solid #8c8c8c;
    }
    :focus {
      width: 8rem;
      border: 2px solid #8c8c8c;
    }
    :active {
      width: 8rem;
      border: 2px solid #8c8c8c;
    }
  }
`;

function App() {
  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    onSearchValueChange,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    done,
    setDone,
  } = useTodos();

  return (
    <PageWrapper>
      <Header>
        <Span>N</Span>
        <Span2>⊙﹏⊙</Span2>
        <Span>tas!</Span>
      </Header>
      <TodoCounter>
        <CounterDiv>
          <CounterH2>
            <span>{completedTodos} chekeada(s), </span>
            <YellowSpan>{totalTodos - completedTodos} pendiente(s).</YellowSpan>
          </CounterH2>
          <TodoSearch>
            <TodoSearchDiv>
              <SearchInput
                placeholder="buscar notas"
                value={searchValue}
                onChange={onSearchValueChange} //asignación de handler al evento onChange
              />
            </TodoSearchDiv>
          </TodoSearch>
        </CounterDiv>
      </TodoCounter>
      <TodoWrapper>
        <AddTaskWrapper>
          <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
          <ImgDiv>{typeWritterImg}</ImgDiv>
        </AddTaskWrapper>
        {/* primera versión de TodoList sin render props */}
        {/*         <TodoList>
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
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              done={todo.done}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList> */}

        {/* TODO LIST VERSIÓN RENDER PROPS */}
        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          onError={() => <LoadingCard>ups! ಥ﹏ಥ</LoadingCard>}
          onLoading={() => (
            <LoadingCard>
              <h2>Cargando notas 📀</h2>
            </LoadingCard>
          )}
          onEmptyTodos={() => (
            <LoadingCard>
              <h2>Agrega tu primera nota! ✐ </h2>
            </LoadingCard>
          )}
          render={(todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              done={todo.done}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
        />
      </TodoWrapper>
      {openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
        </Modal>
      )}
    </PageWrapper>
  );
}

export default App;
