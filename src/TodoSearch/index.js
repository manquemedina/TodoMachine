import React from "react";
import { TodoContext } from "../TodoContext";
import styled from "styled-components";

//para dudas referenciarse al tuto https://platzi.com/clases/2444-react/40308-manejo-del-estado/
//minuto 10:30 hace un recap épico de la lógica por si no la entedés cuando vuelvas.

const TodoSearchDiv = styled.div`
  display: flex;

  background-color: #8c8c8c;
  text-align: right;
  padding: 0.5rem;
  justify-items: center;
  align-items: center;
  @media (max-width: 425px) {
    flex-direction: column;
    margin: 1rem;
  } /* justify-content: space-between; */
`;
const SearchInput = styled.input`
  height: 1.5rem;
  width: 8rem;
  margin-right: 1rem;
  border-radius: 10px;
  text-align: center;
  font-size: 1rem;
  font-family: "Quicksand", sans-serif;
  transition: all 0.25s;
  :hover {
    width: 16rem;
    border: 2px solid #8c8c8c;
  }
  :focus {
    width: 16rem;
    border: 2px solid #8c8c8c;
  }
  :active {
    width: 16rem;
    border: 2px solid #8c8c8c;
  }
  @media (max-width: 460px) {
    margin-right: 0;
    :hover {
      width: 8rem;
      border: 2px solid #8c8c8c;
    }
    :focus {
      width: 8rem;
      border: 2px solid #8c8c8c;
    }
    :active {
      width: 8rem;
      border: 2px solid #8c8c8c;
    }
  }
`;

export function TodoSearch() {
  //al levantar el estado sacamos estos dos valores del cuerpo de nuestra función local y le decimos a ésta que los va a recibir como props cuando llamemos al componente TodoSearch desde su parent, App
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    //función handler que escucha valores del input
    console.log(event.target.value);
    setSearchValue(event.target.value); //método actualizador de estado
  };

  return (
    <>
      <TodoSearchDiv>
        <SearchInput
          placeholder="buscar notas"
          value={searchValue}
          onChange={onSearchValueChange} //asignación de handler al evento onChange
        />
      </TodoSearchDiv>
    </>
  );
}
