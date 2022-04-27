import styled from "styled-components";

const StyledTodoItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  background-color: orangered;
  font-family: "Quicksand", sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 10px;
  color: white;
  margin: 1rem;
  padding: 1rem;
  max-width: 25rem;
  min-width: fit-content;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
const Icondiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
`;

export function TodoItem(props) {
  return (
    <StyledTodoItem>
      <p children={props.text} />
      <Icondiv>
        <span onClick={props.onComplete}>✔️</span>
        <span onClick={props.onDelete}>☠️</span>
      </Icondiv>
    </StyledTodoItem>
  );
}
