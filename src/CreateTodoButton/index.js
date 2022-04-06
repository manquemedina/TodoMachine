export function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(!props.openModal);
  };
  return <button onClick={onClickButton}>🤓add Todo</button>;
}
