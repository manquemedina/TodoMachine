import { useState } from "react";
import { useEffect } from "react";
import { AppUI } from "./AppUI";

/* const todosHardcodea2 = [
  { text: "shambular primero", completed: false },
  { text: "bambular después", completed: false },
  { text: "shmegels", completed: false },
  { text: "garrarlapala", completed: true },
]; */

//CUSTOM HOOK p localStorage
function useLocalStorage(itemName, initialValue) {
  //Para simular la asincronicidad de una API en el back que tendríamos que esperar que devuelva nuestra data ponemos es parte de la lógica en un setTimeOut
  //primero traemos nuestro estado arriba y a useState le pasamos initialValue, ya que parsedItem (quepasábamos antes) quedó dentro del timeOut y fuera del scope de nuestro Hook
  //luego generamos los dos estados nuevos que necesitamos, loading y error
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);
  useEffect(() => {
    setTimeout(() => {
      //Todo dentro de un bloque try-catch, para que actualice nuestro estado de loading (en el try), y si ocurre algo corre el catch(error)
      try {
        //chekea a ver si existe el item
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        //condicional p que si existe lo parsee y devuelva, y si no lo declare y asigne initialValue
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          //Desde dentro del timeOut (fake API) actualizamos el estado con el valor de parsedItem
          setItem(parsedItem);
          //actualizamos nuestro estado loading, que inicialmente va a ser true, a false, xq ya cargó wey
          setLoading(false);
        }
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  //función para persistir datos, que vamos a llamar en los metodos complete/delete Todo
  const saveItem = (newItem) => {
    try {
      const stringifyedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyedItem);
      //nuestro setter del estado, que antes teníamos en <App> y trajimos al custom hook
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };
  //retorno de nuestro estado y su func actualizadora
  return { item, saveItem, loading, error };
}

function App() {
  //Lógica para persistencia de datos en localStorage

  //estados//
  //cuando traemos más de un estado desde un componente ya no comviene hacerlo en un array, sino en un objeto. En éste caso, que al estado de todos/saveTodos que traíamos de nuestro hook, le sumamos el estado de loading y error hacemos esto de traerlo en formato objeto y en ahí mismo renombramos, ya que lo que acá habiamos llamado "todos" nuestro hook nos lo pasa abstraído como "item"
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState(""); //estado levantado desde TodoSearch para que sea accesible por los demas componentes

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

  //Lógica para completar y eliminar Todos//

  //ésta función recibe el texto, que es el identificador único de nuestros todos y genera un nuevo array con TODAS nuestras tareas para reemplazar nuestro estado anterior "todos", pero marcando la propiedad "completed" como true del index que le pasamos a la funcion:

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos]; //clonamos array (importante el destructuring)
    newTodos[todoIndex].completed = true; //seteamos completed de nuestro índice
    saveTodos(newTodos); //llamamos actualizador de nuestro estado (ahora manejado por el customHook) pasandole nuestro array con el todo actualizado
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos); //llamamos método actualizador de nuestro estado pasandole nuestro array con el todo completado
  };

  // Nuestra UI
  return (
    <AppUI
      loading={loading}
      error={error}
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
