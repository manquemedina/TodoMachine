import styled from "styled-components";
import React from "react";

const StyledTodoItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  justify-content: stretch;
  background-color: #666;
  font-family: "Quicksand", sans-serif;
  font-weight: 800;
  border: solid 2px white;
  border-radius: 10px;
  color: #fff;
  opacity: 0.7;
  margin: 0.5rem 1rem;
  padding: 1rem;
  /* height: fit-content; */
  /* max-width: fit-content; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  transition: all 0.25s;
  :hover {
    background-color: #777;
    opacity: 1;
    transform: scale(1.02);
  }
  @media (max-width: 592px) {
    margin: 1rem auto;
  }
`;
const Icondiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1.5rem 1rem 0;
  align-items: center;
  justify-content: right;
  text-align: center;
  opacity: 0;
  transition: opacity 0.25s;
  :hover {
    opacity: 1;
  }
`;
const Span1 = styled.span`
  margin: 0 0.2rem;
  cursor: pointer;
  width: 2.5rem;
  padding: 0.25rem;
  border-radius: 50px;
  background-color: #999;
  opacity: 0.7;
  :hover {
    opacity: 1;
    background-color: #1af539;
  }
`;
const P = styled.p`
  padding: 1rem;
  margin: 0.25rem;
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
    background-color: #d62323;
  }
`;

export function TodoItem(props) {
  return (
    /* acá va a haber que meter CSS sobre el styled components lo siento BB */
    <StyledTodoItem className={`${props.done && "TodoItemDone"}`}>
      <P children={props.text} />
      <Icondiv>
        <Span1 onClick={props.onComplete}>✔︎</Span1>
        <Span2 onClick={props.onDelete}>✘</Span2>
      </Icondiv>
    </StyledTodoItem>
  );
}
