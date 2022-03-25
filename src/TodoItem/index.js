export function TodoItem(props) {
  return (
    <li>{/* los métodos complete/deleteTodo se pasan como props, ver <TodoItem> en App */}
      <span onClick={props.onComplete}>✔️</span>
      <p children={props.text} />
      <span onClick={props.onDelete}>☠️</span>
    </li>
  );
}
