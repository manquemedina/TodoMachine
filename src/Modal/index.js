import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalDiv = styled.div`
  z-index: 5;

  width: 100%;
  height: 100%;
  margin: 0;
  background: rgba(32, 35, 41, 0.8);
  position: fixed;
  top: 135px;
  left: -10px;
  right: -10px;
  bottom: -10px;
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
