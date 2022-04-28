import styled from "styled-components";

const StyledTodoItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  background-color: #8c8c8c;
  font-family: "Quicksand", sans-serif;
  font-size: 1.2rem;
  font-weight: 800;
  border-radius: 10px;
  color: #333;
  margin: 0.5rem 1rem;
  padding: 1rem;
  max-width: 25rem;
  min-width: fit-content;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  :hover {
    background-color: #eac253;
  }
  @media (max-width: 592px) {
    margin: 1rem auto;
  } ;
`;
const Icondiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1.5rem 1rem 0;
  align-items: center;
  justify-content: right;
`;
const Span = styled.span`
  margin: 0 1rem;
`;

export function TodoItem(props) {
  return (
    <StyledTodoItem>
      <p children={props.text} />
      <Icondiv>
        <Span onClick={props.onComplete}>✔️</Span>
        <Span onClick={props.onDelete}>☠️</Span>
      </Icondiv>
    </StyledTodoItem>
  );
}
