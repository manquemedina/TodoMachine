import styled from "styled-components";

/* const button = styled(button)`
  color: red;
  background-color: blue;
`; */
const StyledDiv = styled.div``;
const StyledButton = styled.button`
  width: 100%;
  margin: 2rem 0;
  padding: 1rem;
  font-size: 1.5rem;
  background-color: #EAC253;
  color: #333;
  border-radius: 10px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(!props.openModal);
    // o escribirlo pasando una función al setter, que toma el estado previo y lo invierte.
    /* props.setOpenModal((prevState) => !prevState); */
  };
  return (
    <StyledDiv>
      <StyledButton onClick={onClickButton}>ʕ•ᴥ•ʔ</StyledButton>
    </StyledDiv>
  );
}
