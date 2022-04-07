export function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(!props.openModal);
    // o escribirlo pasando una función al setter, que toma el estado previo y lo invierte.
    /* props.setOpenModal((prevState) => !prevState); */
  };
  return <button onClick={onClickButton}>🤓add Todo</button>;
}
