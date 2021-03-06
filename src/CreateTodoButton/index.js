import styled from "styled-components";

/* const button = styled(button)`
  color: red;
  background-color: blue;
`; */
const StyledDiv = styled.div`
  display: flex;
`;
const StyledButton = styled.button`
  width: 100%;
  margin: 2rem auto;
  padding: 1rem;
  font-size: 2.5rem;
  background-color: #fff;
  color: #333;
  border-radius: 10px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  opacity: 0.8;
  transition: all 0.25s;
  :hover {
    opacity: 1;
    color: #fff;
    background-color: #555;
  }
`;

export function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(!props.openModal);
    // o escribirlo pasando una función al setter, que toma el estado previo y lo invierte.
    /* props.setOpenModal((prevState) => !prevState); */
  };
  return (
    <StyledDiv>
      <StyledButton onClick={onClickButton}>✐</StyledButton>
    </StyledDiv>
  );
}
