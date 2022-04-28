import React from "react";
import styled from "styled-components";

const logo = (
  <img
    style={{ height: "6rem" }}
    src="https://lh3.googleusercontent.com/I_nJjL0R26VpMXV9702jErEn9_tnDyu-aSMCIwMYEbLNqwbx4QPHGlHrBm6lqocdVipOMQHwgRvOiiWtwu29HP_WYDQEg_-WpoHCHQ_4gu2sKhVpu8m9I44nO-EWPSMl2twJ9LISXrwZSJCbfvQ-VW-PoYQwlIYvOq4__Q7-Lh7sH6ZAyIjx4Y99WzJdog7WXFoKtmVCQnRHcuBk3mgNePuhU4NhW_Ak14bhBsbYxwvAgFrR9rGquLK6_ThY6ooHUYj-Cj8Ca7pmlEN1LMCeXpWXPhjw44xOZvG8gvOUr4Sj3fJ_xMQRQTtHfS0JoYDNGFXLaxfutoQyMxnhYio9Pwl-1qxAlsi_xhNiqBkZHfsHnxoiRiF61_zmSaSfbfoH8zxrulYu234T4IqF2qC4k8lmEaiacngtV83qHCW87tx0_7tvaaBJ5NWhgoMXTizCREMMEkNcqec5NNkTIGWBjr9H9OCjgnJSdCdMA_J4_B772Ja3BSByqu-FSGgW1TMkGgJIe9xYO1Qt8Pe9IFmDaLhtBVhd6HZPEJ0dB8FERMWTNpMxbstc9qrFEYGXSEJ2Vw3DVQFshdZfiyPmmDVR7mlYr-LVn4vrPSAg6xKQUsI6BZr3Xez2lv4ExTmOmmGGEgJsPVPmA8VaY9v7N_EEEtGXwbUx9-vtD4j55_HLQI0v-DJvn4AtZycbMb95cN1DtpBCzWzieyqUf_yWnMmcUm5p-HfEjHR0PsvdbZ5wBKxYqvtwkTaCV57wL08=w568-h757-no?authuser=0"
  />
);
const logo2 = (
  <img
    style={{ width: "18rem" }}
    src="https://lh3.googleusercontent.com/I_nJjL0R26VpMXV9702jErEn9_tnDyu-aSMCIwMYEbLNqwbx4QPHGlHrBm6lqocdVipOMQHwgRvOiiWtwu29HP_WYDQEg_-WpoHCHQ_4gu2sKhVpu8m9I44nO-EWPSMl2twJ9LISXrwZSJCbfvQ-VW-PoYQwlIYvOq4__Q7-Lh7sH6ZAyIjx4Y99WzJdog7WXFoKtmVCQnRHcuBk3mgNePuhU4NhW_Ak14bhBsbYxwvAgFrR9rGquLK6_ThY6ooHUYj-Cj8Ca7pmlEN1LMCeXpWXPhjw44xOZvG8gvOUr4Sj3fJ_xMQRQTtHfS0JoYDNGFXLaxfutoQyMxnhYio9Pwl-1qxAlsi_xhNiqBkZHfsHnxoiRiF61_zmSaSfbfoH8zxrulYu234T4IqF2qC4k8lmEaiacngtV83qHCW87tx0_7tvaaBJ5NWhgoMXTizCREMMEkNcqec5NNkTIGWBjr9H9OCjgnJSdCdMA_J4_B772Ja3BSByqu-FSGgW1TMkGgJIe9xYO1Qt8Pe9IFmDaLhtBVhd6HZPEJ0dB8FERMWTNpMxbstc9qrFEYGXSEJ2Vw3DVQFshdZfiyPmmDVR7mlYr-LVn4vrPSAg6xKQUsI6BZr3Xez2lv4ExTmOmmGGEgJsPVPmA8VaY9v7N_EEEtGXwbUx9-vtD4j55_HLQI0v-DJvn4AtZycbMb95cN1DtpBCzWzieyqUf_yWnMmcUm5p-HfEjHR0PsvdbZ5wBKxYqvtwkTaCV57wL08=w568-h757-no?authuser=0"
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
      {logo}
      {children}
    </HeaderDiv>
  );
}
export { Header, logo, logo2 };
