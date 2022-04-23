import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

/* const todosHardcodea2 = [
  { text: "shambular primero", completed: false },
  { text: "bambular después", completed: false },
  { text: "shmegels", completed: false },
  { text: "garrarlapala", completed: true },
]; */

function App() {
  // Nuestra UI
  //al envolver nuestro componente AppUi en el TodoProvider hacemos que cualquier componete dentro de AppUi pueda acceder al estado y props declaradas en nuestro context provider 
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
