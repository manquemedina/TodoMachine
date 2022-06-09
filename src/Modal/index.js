import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalDiv = styled.div`
  z-index: 5;
  height: 100%;
  margin: 0;
  background: #222;
  border: 2px solid #999;
  border-radius: 10px;
  position: fixed;
  top: 0px;
  //si descomento ésto el modal vuelve a ocupar todo el viewport, así como está queda de sidebar, belleza
/*   left: -10px;
  right: -10px;
  bottom: -10px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: white;
`;

function Modal({ children }) {
  return ReactDOM.createPortal(
    <ModalDiv className="ModalBackground">{children}</ModalDiv>,
    document.getElementById("modal")
  );
}

export { Modal };
