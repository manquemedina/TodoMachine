import styled from "styled-components";
import React from "react";
import "./TodoItemCSS.css";

const StyledTodoItem = styled.li`word-wrap: break-word;`;
const Icondiv = styled.div``;
const Span1 = styled.span``;
const P = styled.p`

`;
const Span2 = styled.span``;

export function TodoItem(props) {
  return (
    /* acá va a haber que meter CSS sobre el styled components lo siento BB */
    <StyledTodoItem
      className={`StyledTodoItem ${props.done && "StyledTodoItemDone"}`}
    >
      <P children={props.text} className={"P"} />
      <Icondiv className={"IconDiv"}>
        <Span1 className={"Span1"} onClick={props.onComplete}>
          ✔︎
        </Span1>
        <Span2 className={"Span2"} onClick={props.onDelete}>
          ✘
        </Span2>
      </Icondiv>
    </StyledTodoItem>
  );
}
