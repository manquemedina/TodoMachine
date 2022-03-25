import React from "react";
import { useState } from "react";

//para dudas referenciarse al tuto https://platzi.com/clases/2444-react/40308-manejo-del-estado/
//minuto 10:30 hace un recap épico de la lógica por si no la entedés cuando vuelvas.

export function TodoSearch({searchValue, setSearchValue}) { //al levantar el estado sacamos estos dos valores del cuerpo de nuestra función local y le decimos a ésta que los va a recibir como props cuando llamemos al componente TodoSearch desde su parent, App
  
  const onSearchValueChange = (event) => { //función handler que escucha valores del input
    console.log(event.target.value);
    setSearchValue(event.target.value);  //método actualizador de estado
  };

  return (
    <>
      <input
        className="TodoSearch"
        placeholder="Search task"
        value={searchValue}
        onChange={onSearchValueChange} //asignación de handler al evento onChange
      />
      <p>{searchValue}</p>   {/* ésto está solo a fines de ver cómo renderiza */}
    </>
  );
}
