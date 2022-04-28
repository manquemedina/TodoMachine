import React from "react";
import styled from "styled-components";

const logo = (
  <img
    style={{ height: "6rem" }}
    src="https://lh3.googleusercontent.com/dzoqmffDZ6wjcnDS9IMT-bmECFmJ2kZIxRIUIYk7N1QYGzdtE1_VMA3DKdCAi4PZ4F8bZweZdTKicvfHyGl46mo0aD03NFtqfvqx2uTppydxNVa3nyfFmxTyZILyzQ6S5alUqyGw0Sla-pgoiI6K6slNDYygowKVizcy6jkjUHnHmzZ1fkMenvFOUqlAvxHohP0JjJNIFpjtkcgEmndOW99bZr4ySpSB8DU71TSwt9ZynCi2N9DVTe1S8EYbVdlip6cs01AkTc5X3yiS_9wmhROaA3Tz9GSKw84ogygL4Rpf0NMV1M2SU8fe3C4b_PSCt82k-bcQ7obkgk4GJ33--DVYNSMvj3ld0jFArn_iE-P3iIyUnaAtx47w1GRs11tqI6TtcI9cx7yDTBydBd9zEh3u3nI78Kt5NkihlJjJc1B5euKUvVz-H9wW0kcU-yclxvm_TmIaotf4DBP1HHcniOv30wxTeh8FUrbCTO38QIqAH4WAdTbgJIL9TbOnKyn7T-FQj-cAvxz01pjYEJVfLM_yWKEJKRV-QDyV1JnzA5QmrYSZ_vealeatCX3NijIZGBnBb0jd-F3BBI_Adzq3bGPiJIUoBbXwe7cgo5DWfwfl1afldmAyN3ssj_xolZpIIvKyQmnf6wmk-NsOBEGKtbJakVguF0DwQDM-dWqoG1VH80JZNeSYGRQBKuIESIMjfVsdL8KeOMreqFZsZJ7KDkPAVMv4XNZPL1qXmpEF5dtThviApuAfcrG0XnM=w363-h337-no?authuser=0"
  />
);
const logo2 = (
  <img
    style={{ width: "18rem", borderRadius:"10px" }}
    src="https://www.pngmart.com/files/7/Typewriter-PNG-Free-Download.png"
  />
);
const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-family: "Quicksand", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  align-items: center;
  justify-content: left;
`;
function Header({ children }) {
  return (
    <HeaderDiv>
      {/* {logo} */}
      {children}
    </HeaderDiv>
  );
}
export { Header, logo, logo2 };
