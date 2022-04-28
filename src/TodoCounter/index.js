import React from "react";
import styled from "styled-components";
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch";

//antes nuestro componente TodoCounter recibía sus props como argumentos desde App.js, ahora los recibe desde nuestro provider mediante useContext, más limpio.
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
  @media (max-width: 415px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  } ;
`;
const H2 = styled.h2`
  margin: 2rem;
`;
const Span = styled.span`
  color: #eac253;
`;

export function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <CounterDiv>
      <H2>
        <span>{completedTodos} chekeadas, </span>
        <Span>{totalTodos - completedTodos} pendientes.</Span>
      </H2>
      <TodoSearch />
    </CounterDiv>
  );
}
