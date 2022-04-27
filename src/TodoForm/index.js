import React from "react";
import { TodoContext } from "../TodoContext";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const TextArea = styled.textarea`
  margin: 1rem;
  padding: 3rem;
  font-family: "Quicksand", sans-serif;
  font-size: 1rem;
  border: none;
  background-color: #222;
  color: #fff;
`;
const Label = styled.label`
  margin: 1rem;
  padding: 1rem;
  font-family: "Quicksand", sans-serif;
  font-size: 2rem;
  font-style: italic;
`;

const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
`;
const Btn = styled.button`
  font-family: "Quicksand", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem;
  background-color: orangered;
  color: #fff;
  border-radius: 10px;
`;

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label>New Task</Label>
      <TextArea value={newTodoValue} onChange={onChange} placeholder="Task" />
      <BtnDiv>
        <Btn
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </Btn>
        <Btn type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </Btn>
      </BtnDiv>
    </Form>
  );
}

export { TodoForm };
