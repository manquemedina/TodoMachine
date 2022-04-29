import styled from "styled-components";

const StyledTodoItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  justify-content: space-between;
  background-color: #777;
  font-family: "Quicksand", sans-serif;
  font-size: 1.2rem;
  font-weight: 800;
  border: solid 2px white;
  border-radius: 10px;
  color: #111;
  opacity: 0.7;
  margin: 0.5rem 1rem;
  padding: 1rem;
  max-width: fit-content;
  height: min-content;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  :hover {
    background-color: #999;
    opacity: 1;
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
  text-align: center;
`;
const Span1 = styled.span`
  margin: 0 0.2rem;
  cursor: pointer;
  width: 2.5rem;
  padding: 0.25rem;
  border-radius: 50px;
  background-color: #777;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
`;
const Span2 = styled.span`
  margin: 0 0.2rem;
  cursor: pointer;
  width: 2.5rem;
  padding: 0.25rem;
  border-radius: 50px;
  background-color: #555;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
`;

export function TodoItem(props) {
  return (
    <StyledTodoItem>
      <p children={props.text} />
      <Icondiv>
        <Span1 onClick={props.onComplete}>✔︎</Span1>
        <Span2 onClick={props.onDelete}>✘</Span2>
      </Icondiv>
    </StyledTodoItem>
  );
}
