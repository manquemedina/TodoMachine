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
  opacity: 0.7;
  margin: 0.5rem 1rem;
  padding: 1rem;
  max-width: fit-content;
  height: min-content;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  :hover {
    background-color: #eac253;
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
`;
const Span1 = styled.span`
  margin: 0 0.2rem;
  cursor: pointer;
  width: 2.5rem;
  /* padding: 1rem; */
  border-radius: 10px;
  background-color: #eac253;
`;
const Span2 = styled.span`
  margin: 0 0.2rem;
  cursor: pointer;
  width: 2.5rem;
  /*   padding: 1rem; */
  border-radius: 70px;
  background-color: #777;
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
