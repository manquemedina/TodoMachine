//antes nuestro componente TodoCounter recibía sus props como argumentos desde App.js, ahora los recibe desde nuestro provider mediante useContext, más limpio.

export function TodoCounter({ children }) {
  return children;
}
