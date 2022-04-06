import React from "react";
import { TodoContext } from "../TodoContext";
//antes nuestro componente TodoCounter recibía sus props como argumentos desde App.js, ahora los recibe desde nuestro provider mediante useContext, más limpio.
export function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <h2>
      Counter: Has completado {completedTodos} de {totalTodos} tareas
    </h2>
  );
}
