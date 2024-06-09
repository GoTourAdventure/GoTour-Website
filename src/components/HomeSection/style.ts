import { styled } from "styled-components";
import Main from "../../assets/gotour_back_long.png";
import Main_mobile from "../../assets/gotour_background.png";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${Main}) no-repeat center;
  background-size: cover;

  @media (max-width: 1000px) {
    background: url(${Main_mobile}) no-repeat center;
    background-size: cover;
  }
`;

export const Logo = styled.img`
  width: 35vw;
  min-width: 300px;
  height:auto;

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  padding-left: 2%;

  
`;
