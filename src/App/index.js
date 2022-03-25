import { useState } from "react";
import { AppUI } from "./AppUI";

const todosHardcodea2 = [
  { text: "shambular primero", completed: false },
  { text: "bambular después", completed: false },
  { text: "shmegels", completed: false },
  { text: "garrarlapala", completed: false },
];

function App() {
  //estados//

  const [, setSearchValue] = useState(""); //estado levantado desde TodoSearch para que sea accesible por los demas componentes
  const [todos, setTodos] = useState(todosHardcodea2);

  //Props para el TodoCounter//

  const totalTodos = todos.length; //cantidad de tareas en nuestro estado
  const completedTodos = todos.filter((todo) => !!todo.completed).length; //.filter() itera por cada item de nuestro array "todos" (nuestro estado) y la arrow func pasada al metodo filter nos devuelve los items que tengan el atributo completed como "true". El .length del final nos devuelve el largo del array retornado por e .filter, dándonos la cantidad de tareas resueltas.
  //ahora para implementar filtro de búsqueda:

  let searchedTodos = []; // ahora vamos a usar éste array para mapear los <TodoItem> en nuestro componente <TodoList>

  //lógica para TodoSearch//

  if (searchValue.length <= 0) {
    searchedTodos = todos; //porque si no buscamos nada nos devuelve la totalidad de tareas
  } /* else {
    searchedTodos = todos.filter((todo) => {
      //con ésta función convertimos cada todo de nuestro searchedTodos[] a minúscula para comparar con el searchValue (esto es para evitar errores)
      const todoText = todo.text.toLowerCase();
      //same para el searchValue, notar que no va el ".text" ya que al ser in input text solo puede tener texto
      const searchText = searchValue.toLowerCase();
      //la VERDADERA función filtradora con includes
      return todoText.includes(searchText);
    }); */

  //este else es same que el de arriba pero + corto y l-gante, en vez de declarar variables para pasar todo a minúscula lo hace directamente con el .includes para flitrar
  else {
    searchedTodos = todos.filter((todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  //Lógica para completar Todos//

  //ésta función recibe el texto, que es el identificador único de nuestros todos y genera un nuevo array con TODAS nuestras tareas para reemplazar nuestro estado anterior "todos", pero marcando la propiedad "completed" como true del index que le pasamos a la funcion:
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos]; //clonamos array (importante el destructuring)
    newTodos[todoIndex].completed = true; //seteamos completed de nuestro índice
    setTodos(newTodos); //llamamos método actualizador de nuestro estado pasandole nuestro array con el todo actualizado
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos); //llamamos método actualizador de nuestro estado pasandole nuestro array con el todo completado
  };

  // Nuestra UI
  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
